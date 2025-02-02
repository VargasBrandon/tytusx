class TablaSimbolos {

    constructor(jsonStruct) {
        this.jsonStruct = jsonStruct
        this.simbolos = []
    }

    generarTabla() {

        let queue = [this.jsonStruct];
        let ambitoActual = ["global"];

        console.log("GENERANDO LA TABLA");
        console.log(this.jsonStruct);

        while (queue.length > 0) {

            let ambito = queue.shift();

            let nombre = ambito['etiqueta'];
            let tipo = ambito['tipo'];
            let fila = ambito['linea'];
            let col = ambito['columna'];
            let texto = ambito['texto'];
            let amb = ambitoActual.shift();
            this.simbolos.push(new Simbolo(nombre,"etiqueta " + tipo, amb, fila, col, texto));

            
            //ATRIBUTOS DE LA ETIQUETA
            if (ambito['atributos']) {
                let fila = ambito['atributos'].linea;
                let col = ambito['atributos'].columna;

                for (let key in ambito['atributos']) {
                    if (key !== 'linea' && key !== 'tipo' && key !== 'columna' && key !== 'nodo') {
                        this.simbolos.push(new Simbolo(key,"atributo", nombre, fila, col, ambito['atributos'][key]));
                    }
                }
            }   

            // VERIFICANDO LOS HIJOS
            if (ambito['hijos']) {
                ambito['hijos'].forEach(hijo => {
                    queue.push(hijo);
                    ambitoActual.push(nombre);
                });
            }
        }



        return this.simbolos;


    }


}
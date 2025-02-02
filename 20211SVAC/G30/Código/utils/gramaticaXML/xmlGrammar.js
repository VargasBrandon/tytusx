/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xmlGrammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,16],$V2=[15,16],$V3=[5,8];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"PROBJ":4,"EOF":5,"PROLOG":6,"OBJETO":7,"tk_<":8,"tk_?":9,"pr_xml":10,"pr_version":11,"tk_=":12,"cadena":13,"pr_encoding":14,"tk_>":15,"identificador":16,"tk_/":17,"contenidoEtiqueta":18,"LATRIBUTOS":19,"OBJETOS":20,"ATRIBUTO":21,"CONTENIDO":22,"&lt":23,"&gt":24,"&amp":25,"&apos":26,"&quot":27,"RECUPERACION":28,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"tk_<",9:"tk_?",10:"pr_xml",11:"pr_version",12:"tk_=",13:"cadena",14:"pr_encoding",15:"tk_>",16:"identificador",17:"tk_/",18:"contenidoEtiqueta",23:"&lt",24:"&gt",25:"&amp",26:"&apos",27:"&quot"},
productions_: [0,[3,2],[3,1],[4,2],[4,1],[6,11],[7,7],[7,6],[7,8],[7,7],[7,9],[7,8],[20,2],[20,1],[19,2],[19,1],[21,3],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 const raiz = new NodoCST('INICIO', [$$[$0-1].nodos]);
                                                        const prod = "<INICIO>\t::= PROBJ EOF\n"+$$[$0-1].producciones;
                                                        const paquete = new Paquete(listaErroresJison, raiz, prod, $$[$0-1].version, $$[$0-1].encoding);
                                                            console.log("Analisis Completo"); 
                                                            listaErroresJison = [];
                                                            return paquete; 
                                                      
break;
case 2:
 const info = new Paquete([], new NodoCST('INICIO', []), "", "", "");
                                                            console.log("EmptyFile"); 
                                                            return info; 
                                                      
break;
case 3:
this.$ = {
                                                            version: $$[$0-1].version,
                                                            encoding: $$[$0-1].encoding,
                                                            nodos: new NodoCST('PROBJ', [$$[$0-1].nodos, $$[$0].nodos]),
                                                            producciones: "<PROBJ>\t\t::= PROLOG OBJETO\n" + $$[$0-1].producciones + $$[$0].producciones
                                                      };
                                                      
break;
case 4:
this.$ = {
                                                            prolog: { version: "", encoding: "" },
                                                            nodos: new NodoCST('PROBJ', [$$[$0].nodos]),
                                                            producciones: "<PROBJ>\t\t::= <OBJETOS>\n" + $$[$0].producciones
                                                      };
                                                      
break;
case 5:
 this.$ = {
            version: ($$[$0-5]!=null)?$$[$0-5].substring(1, $$[$0-5].length - 1):"",
            encoding: ($$[$0-2]!=null)?$$[$0-2].substring(1, $$[$0-2].length - 1):"",
            nodos: new NodoCST('PROLOG', [
                  new NodoCST('tk_<', []),           new NodoCST('tk_?', []), new NodoCST('pr_xml', []),
                  new NodoCST('pr_version', []),     new NodoCST('tk_=', []), new NodoCST('cadena', [new NodoCST($$[$0-5], [])]),
                  new NodoCST('pr_encoding', []),    new NodoCST('tk_=', []), new NodoCST('cadena', [new NodoCST($$[$0-2], [])]),
                  new NodoCST('tk_?', []),           new NodoCST('tk_>', []),
            ]),
            producciones: "<PROLOG>\t\t::= 'tk_<' 'tk_?' 'pr_xml' 'pr_version' 'tk_=' 'cadena' 'pr_encoding' 'tk_=' 'cadena' 'tk_?' 'tk_>'\n"
      };
break;
case 6:
     if($$[$0-5] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),                           new NodoCST('id', [new NodoCST($$[$0-5], [])]), new NodoCST('>', []),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),   new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' 'tk_>' 'tk_<' 'tk_/' 'identificador' 'tk_>'\n"
                                                                                          };
                                                                                    
break;
case 7:
     if($$[$0-4] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),                           new NodoCST('id', [new NodoCST($$[$0-4], [])]), new NodoCST('>', []),
                                                                                                      new NodoCST('contenidoE', [new NodoCST($$[$0-2], [])]),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),   new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' 'tk_>' 'contenidoEtiqueta' 'identificador' 'tk_>'\n"
                                                                                          };
                                                                                    
break;
case 8:
    if($$[$0-6] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),   new NodoCST('id', [new NodoCST($$[$0-6], [])]), new NodoCST('LATRIBUTOS', [$$[$0-5].nodos]),    new NodoCST('>', []),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),                     new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' LATRIBUTOS 'tk_>' 'tk_<' 'tk_/' 'identificador' 'tk_>'\n" + $$[$0-5].producciones
                                                                                          };
                                                                                    
break;
case 9:
     if($$[$0-5] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),   new NodoCST('id', [new NodoCST($$[$0-5], [])]), new NodoCST('LATRIBUTOS', [$$[$0-4].nodos]),    new NodoCST('>', []),
                                                                                                      new NodoCST('contenidoE', [new NodoCST($$[$0-2], [])]),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),                     new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' LATRIBUTOS 'tk_>' 'contenidoEtiqueta' 'identificador' 'tk_>'\n" + $$[$0-4].producciones
                                                                                          };
                                                                                    
break;
case 10:
     if($$[$0-7] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),   new NodoCST('id', [new NodoCST($$[$0-7], [])]), new NodoCST('LATRIBUTOS', [$$[$0-6].nodos]),    new NodoCST('>', []),
                                                                                                      new NodoCST('OBJETOS', [$$[$0-4].nodos]),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),                     new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' LATRIBUTOS 'tk_>' OBJETOS 'tk_<' 'tk_/' 'identificador' 'tk_>'\n" + $$[$0-6].producciones + $$[$0-4].producciones
                                                                                          };
                                                                                    
break;
case 11:
     if($$[$0-6] != $$[$0-1]){
                                                                                                listaErroresJison.push( new Excepcion('Semántico', this._$.first_line, this._$.first_column, `Etiqueta no correspondiente`));
                                                                                          }
                                                                                          this.$ = {
                                                                                                nodos: new NodoCST('OBJETO', [
                                                                                                      new NodoCST('<', []),                                             new NodoCST('id', [new NodoCST($$[$0-6], [])]), new NodoCST('>', []),
                                                                                                      new NodoCST('OBJETOS', [$$[$0-4].nodos]),
                                                                                                      new NodoCST('<', []),   new NodoCST('/', []),                     new NodoCST('id', [new NodoCST($$[$0-1], [])]), new NodoCST('>', [])
                                                                                                ]),
                                                                                                producciones: "<OBJETO>\t\t::= 'tk_<' 'identificador' 'tk_>' OBJETOS 'tk_<' 'tk_/' 'identificador' 'tk_>'\n" + $$[$0-4].producciones
                                                                                          };
                                                                                    
break;
case 12:
     this.$ = {
                                                            nodos: new NodoCST('OBJETOS', [$$[$0-1].nodos, $$[$0].nodos]),
                                                            producciones: "<OBJETOS>\t::= OBJETOS OBJETO\n" + $$[$0-1].producciones + $$[$0].producciones
                                                      };
                                                
break;
case 13: case 15: case 23: case 24: case 25: case 26:
this.$ = $$[$0];
break;
case 14:
     this.$ = {
                                                            nodos: new NodoCST('LATRIBUTOS', [$$[$0-1].nodos, $$[$0].nodos]),
                                                            producciones: "<LATRIBUTOS>\t::= LATRIBUTOS ATRIBUTO\n" + $$[$0-1].producciones + $$[$0].producciones
                                                      };
                                                
break;
case 16:
     this.$ = {
                                                            nodos: new NodoCST('ATRIBUTO', [
                                                                  new NodoCST('id', [new NodoCST($$[$0-2], [])]), new NodoCST('=', []), new NodoCST('cadena', [new NodoCST($$[$0], [])])
                                                            ]),
                                                            producciones: "<ATRIBUTO>\t\t::= 'identificador' 'tk_=' 'cadena'"
                                                      };
                                                
break;
case 17: case 18: case 19: case 20: case 21: case 22:
 this.$ = $$[$0] 
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:5,8:[1,6]},{1:[3]},{5:[1,7]},{1:[2,2]},{7:8,8:[1,9]},{5:[2,4]},{9:[1,10],16:$V0},{1:[2,1]},{5:[2,3]},{16:$V0},{10:[1,12]},{15:[1,13],16:$V1,19:14,21:15},{11:[1,17]},{7:21,8:[1,18],18:[1,19],20:20},{15:[1,22],16:$V1,21:23},o($V2,[2,15]),{12:[1,24]},{12:[1,25]},{16:$V0,17:[1,26]},{16:[1,27]},{7:29,8:[1,28]},{8:[2,13]},{7:21,8:[1,30],18:[1,31],20:32},o($V2,[2,14]),{13:[1,33]},{13:[1,34]},{16:[1,35]},{15:[1,36]},{16:$V0,17:[1,37]},{8:[2,12]},{16:$V0,17:[1,38]},{16:[1,39]},{7:29,8:[1,40]},o($V2,[2,16]),{14:[1,41]},{15:[1,42]},o($V3,[2,7]),{16:[1,43]},{16:[1,44]},{15:[1,45]},{16:$V0,17:[1,46]},{12:[1,47]},o($V3,[2,6]),{15:[1,48]},{15:[1,49]},o($V3,[2,9]),{16:[1,50]},{13:[1,51]},o($V3,[2,11]),o($V3,[2,8]),{15:[1,52]},{9:[1,53]},o($V3,[2,10]),{15:[1,54]},{8:[2,5]}],
defaultActions: {3:[2,2],5:[2,4],7:[2,1],8:[2,3],21:[2,13],29:[2,12],54:[2,5]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const { Excepcion } = require('src/app/models/excepcion.model');
    var listaErroresJison = Array();

    const { Paquete } = require('src/app/models/CST/paquete.model');
    const { NodoCST } = require('src/app/models/CST/nodoCST.model');

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* Ignora los espacios en blanco */
break;
case 1://Ignora los comentarios
break;
case 2:return 8;         
break;
case 3:return 15;         
break;
case 4:return 12;         
break;
case 5:return 17;         
break;
case 6:return 9;         
break;
case 7:return 10;       
break;
case 8:return 11;   
break;
case 9:return 14;  
break;
case 10:return 23;          
break;
case 11:return 24;          
break;
case 12:return 25;         
break;
case 13:return 26;        
break;
case 14:return 27;        
break;
case 15:return 13;             
break;
case 16:yy_.yytext = yy_.yytext.substring(0, yy_.yyleng-2); return 18;  
break;
case 17:return 16;      
break;
case 18:return 'entero';             
break;
case 19:return 'decimal';            
break;
case 20:return 5;
break;
case 21:
                        listaErroresJison.push(new Excepcion('Léxico', yy_.yylloc.first_line, yy_.yylloc.first_column, yy_.yytext));
                  
break;
}
},
rules: [/^(?:\s+)/,/^(?:<!--.*-->)/,/^(?:<)/,/^(?:>)/,/^(?:=)/,/^(?:\/)/,/^(?:\?)/,/^(?:xml\b)/,/^(?:version\b)/,/^(?:encoding\b)/,/^(?:&lt;)/,/^(?:&gt;)/,/^(?:&amp;)/,/^(?:&apos;)/,/^(?:&quot;)/,/^(?:"[^\"]*")/,/^(?:(((&\w+;)|[^&<>])*<\/))/,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/,/^(?:[0-9]+)/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = xmlGrammar;
exports.Parser = xmlGrammar.Parser;
exports.parse = function () { return xmlGrammar.parse.apply(xmlGrammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
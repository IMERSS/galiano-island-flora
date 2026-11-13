// Generated from RFilter.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RFilterListener from './RFilterListener.mjs';
const serializedATN = [4,1,50,146,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,4,1,23,8,1,11,
1,12,1,24,1,2,1,2,3,2,29,8,2,1,2,1,2,1,2,3,2,34,8,2,1,2,1,2,1,2,1,2,5,2,
40,8,2,10,2,12,2,43,9,2,1,2,1,2,1,2,1,2,1,2,5,2,50,8,2,10,2,12,2,53,9,2,
1,2,1,2,1,2,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,1,2,1,2,1,2,5,2,68,8,2,10,
2,12,2,71,9,2,1,2,1,2,1,2,3,2,76,8,2,1,2,1,2,1,2,5,2,81,8,2,10,2,12,2,84,
9,2,1,2,1,2,3,2,88,8,2,1,2,1,2,3,2,92,8,2,1,2,1,2,1,2,5,2,97,8,2,10,2,12,
2,100,9,2,1,2,1,2,3,2,104,8,2,1,2,1,2,3,2,108,8,2,1,2,1,2,1,2,5,2,113,8,
2,10,2,12,2,116,9,2,1,2,1,2,3,2,120,8,2,1,2,1,2,3,2,124,8,2,1,2,1,2,1,2,
5,2,129,8,2,10,2,12,2,132,9,2,1,2,1,2,3,2,136,8,2,1,2,1,2,3,2,140,8,2,1,
3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,2,2,0,20,27,41,46,6,0,1,4,9,9,12,12,
17,19,28,36,47,47,181,0,15,1,0,0,0,2,22,1,0,0,0,4,139,1,0,0,0,6,141,1,0,
0,0,8,143,1,0,0,0,10,14,3,4,2,0,11,14,5,48,0,0,12,14,5,49,0,0,13,10,1,0,
0,0,13,11,1,0,0,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,
0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,5,48,0,0,
21,23,6,1,-1,0,22,20,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,
3,1,0,0,0,26,28,3,8,4,0,27,29,3,2,1,0,28,27,1,0,0,0,28,29,1,0,0,0,29,140,
1,0,0,0,30,140,3,6,3,0,31,33,5,39,0,0,32,34,3,2,1,0,33,32,1,0,0,0,33,34,
1,0,0,0,34,35,1,0,0,0,35,41,6,2,-1,0,36,40,3,4,2,0,37,40,5,48,0,0,38,40,
5,49,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,
0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,6,2,-1,0,45,140,5,
40,0,0,46,51,5,37,0,0,47,50,3,4,2,0,48,50,3,2,1,0,49,47,1,0,0,0,49,48,1,
0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,
0,0,54,140,5,38,0,0,55,60,5,15,0,0,56,59,3,4,2,0,57,59,3,2,1,0,58,56,1,0,
0,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,
0,62,60,1,0,0,0,63,140,5,16,0,0,64,69,5,13,0,0,65,68,3,4,2,0,66,68,3,2,1,
0,67,65,1,0,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,
70,72,1,0,0,0,71,69,1,0,0,0,72,140,5,14,0,0,73,75,5,10,0,0,74,76,3,2,1,0,
75,74,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,82,5,37,0,0,78,81,3,4,2,0,79,
81,3,2,1,0,80,78,1,0,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,
1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,87,5,38,0,0,86,88,3,2,1,0,87,86,1,
0,0,0,87,88,1,0,0,0,88,140,1,0,0,0,89,91,5,7,0,0,90,92,3,2,1,0,91,90,1,0,
0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,98,5,37,0,0,94,97,3,4,2,0,95,97,3,2,1,
0,96,94,1,0,0,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,
99,101,1,0,0,0,100,98,1,0,0,0,101,103,5,38,0,0,102,104,3,2,1,0,103,102,1,
0,0,0,103,104,1,0,0,0,104,140,1,0,0,0,105,107,5,8,0,0,106,108,3,2,1,0,107,
106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,114,5,37,0,0,110,113,3,4,
2,0,111,113,3,2,1,0,112,110,1,0,0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,
112,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,119,5,38,
0,0,118,120,3,2,1,0,119,118,1,0,0,0,119,120,1,0,0,0,120,140,1,0,0,0,121,
123,5,6,0,0,122,124,3,2,1,0,123,122,1,0,0,0,123,124,1,0,0,0,124,125,1,0,
0,0,125,130,5,37,0,0,126,129,3,4,2,0,127,129,3,2,1,0,128,126,1,0,0,0,128,
127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,
0,0,132,130,1,0,0,0,133,135,5,38,0,0,134,136,3,2,1,0,135,134,1,0,0,0,135,
136,1,0,0,0,136,140,1,0,0,0,137,138,5,11,0,0,138,140,6,2,-1,0,139,26,1,0,
0,0,139,30,1,0,0,0,139,31,1,0,0,0,139,46,1,0,0,0,139,55,1,0,0,0,139,64,1,
0,0,0,139,73,1,0,0,0,139,89,1,0,0,0,139,105,1,0,0,0,139,121,1,0,0,0,139,
137,1,0,0,0,140,5,1,0,0,0,141,142,7,0,0,0,142,7,1,0,0,0,143,144,7,1,0,0,
144,9,1,0,0,0,30,13,15,24,28,33,39,41,49,51,58,60,67,69,75,80,82,87,91,96,
98,103,107,112,114,119,123,128,130,135,139];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RFilter extends antlr4.Parser {

    static grammarFileName = "RFilter.g4";
    static literalNames = [ null, "'^'", "'~'", "','", "'...'", "'.'", "'if'",
                            "'for'", "'while'", "'repeat'", "'function'",
                            "'else'", "'in'", "'[['", "']]'", "'['", "']'",
                            null, null, "'?'", "'next'", "'break'", "'NULL'",
                            "'NA'", "'inf'", "'NaN'", "'TRUE'", "'FALSE'",
                            "'!'", "':'", null, null, null, null, "'='",
                            null, null, "'('", "')'", "'{'", "'}'", null,
                            null, null, null, null, null, null, null, "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, "IF", "FOR",
                             "WHILE", "REPEAT", "FUNCTION", "ELSE", "IN",
                             "LIST_ACCESS_START", "LIST_ACCESS_END", "ARRAY_ACCESS_START",
                             "ARRAY_ACCESS_END", "NAMESPACE_ACCESS", "COMPONENT_ACCESS",
                             "HELP", "NEXT", "BREAK", "NULL", "NA", "INF",
                             "NAN", "TRUE", "FALSE", "NOT", "RANGE_OPERATOR",
                             "MULT_DIV", "ADD_SUB", "COMPARATOR", "ASSIGN",
                             "EQUALS", "AND", "OR", "PAREN_L", "PAREN_R",
                             "CURLY_L", "CURLY_R", "HEX", "INT", "FLOAT",
                             "COMPLEX", "STRING", "ID", "USER_OP", "NL",
                             "SEMICOLON", "WS" ];
    static ruleNames = [ "stream", "eat", "elem", "atom", "op" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RFilter.ruleNames;
        this.literalNames = RFilter.literalNames;
        this.symbolicNames = RFilter.symbolicNames;

		// AMB: original had
		// protected int curlies = 0;
		// Java leftover?
		this.curlies = 0;

    }



	stream() {
	    let localctx = new StreamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RFilter.RULE_stream);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 261823) !== 0)) {
	            this.state = 13;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 15:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 39:
	            case 41:
	            case 42:
	            case 43:
	            case 44:
	            case 45:
	            case 46:
	            case 47:
	                this.state = 10;
	                this.elem();
	                break;
	            case 48:
	                this.state = 11;
	                this.match(RFilter.NL);
	                break;
	            case 49:
	                this.state = 12;
	                this.match(RFilter.SEMICOLON);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(RFilter.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eat() {
	    let localctx = new EatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RFilter.RULE_eat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 20;
	        		localctx._NL = this.match(RFilter.NL);
	        		// AMB original had ((WritableToken)localctx._NL).setChannel(Token.HIDDEN_CHANNEL);
					// console.log("localctx._NL", localctx._NL);
					localctx._NL.channel = 1;
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 24;
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elem() {
	    let localctx = new ElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RFilter.RULE_elem);
	    var _la = 0;
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 9:
	        case 12:
	        case 17:
	        case 18:
	        case 19:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.op();
	            this.state = 28;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 27;
	                this.eat();

	            }
	            break;
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.atom();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.match(RFilter.CURLY_L);
	            this.state = 33;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 32;
	                this.eat();

	            }
	            this.curlies++;
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 261823) !== 0)) {
	                this.state = 39;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 36;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 37;
	                    this.match(RFilter.NL);
	                    break;
	                case 49:
	                    this.state = 38;
	                    this.match(RFilter.SEMICOLON);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 43;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.curlies--;
	            this.state = 45;
	            this.match(RFilter.CURLY_R);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.match(RFilter.PAREN_L);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 49;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 47;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 48;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 53;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 54;
	            this.match(RFilter.PAREN_R);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.match(RFilter.ARRAY_ACCESS_START);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 58;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 56;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 57;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 63;
	            this.match(RFilter.ARRAY_ACCESS_END);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 64;
	            this.match(RFilter.LIST_ACCESS_START);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 67;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 65;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 66;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 72;
	            this.match(RFilter.LIST_ACCESS_END);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 73;
	            this.match(RFilter.FUNCTION);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 74;
	                this.eat();
	            }

	            this.state = 77;
	            this.match(RFilter.PAREN_L);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 80;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 78;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 79;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 84;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 85;
	            this.match(RFilter.PAREN_R);
	            this.state = 87;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 86;
	                this.eat();

	            }
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 89;
	            this.match(RFilter.FOR);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 90;
	                this.eat();
	            }

	            this.state = 93;
	            this.match(RFilter.PAREN_L);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 96;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 94;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 95;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 100;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 101;
	            this.match(RFilter.PAREN_R);
	            this.state = 103;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 102;
	                this.eat();

	            }
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 105;
	            this.match(RFilter.WHILE);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 106;
	                this.eat();
	            }

	            this.state = 109;
	            this.match(RFilter.PAREN_L);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 112;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 110;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 111;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 116;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 117;
	            this.match(RFilter.PAREN_R);
	            this.state = 119;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 118;
	                this.eat();

	            }
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 121;
	            this.match(RFilter.IF);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 122;
	                this.eat();
	            }

	            this.state = 125;
	            this.match(RFilter.PAREN_L);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294885342) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 130751) !== 0)) {
	                this.state = 128;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 15:
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                case 21:
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 27:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 39:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 46:
	                case 47:
	                    this.state = 126;
	                    this.elem();
	                    break;
	                case 48:
	                    this.state = 127;
	                    this.eat();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 133;
	            this.match(RFilter.PAREN_R);
	            this.state = 135;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 134;
	                this.eat();

	            }
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 137;
	            this.match(RFilter.ELSE);

	                    // ``inside a compound expression, a newline before else is discarded,
	                    // whereas at the outermost level, the newline terminates the if
	                    // construction and a subsequent else causes a syntax error.''
	                    /*
	                    Works here
	                        if (1==0) { print(1) } else { print(2) }

	                    and correctly gets error here:

	                        if (1==0) { print(1) }
	                        else { print(2) }

	                    this works too:

	                        if (1==0) {
	                          if (2==0) print(1)
	                          else print(2)
	                        }
	                    */
	                    const tok = _input.LT(-2);
	                    if (this.curlies>0&&tok.getType()==NL) tok.setChannel(1);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RFilter.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!(((((_la - 20)) & ~0x1f) === 0 && ((1 << (_la - 20)) & 132120831) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RFilter.RULE_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4027453982) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 32799) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RFilter.EOF = antlr4.Token.EOF;
RFilter.T__0 = 1;
RFilter.T__1 = 2;
RFilter.T__2 = 3;
RFilter.T__3 = 4;
RFilter.T__4 = 5;
RFilter.IF = 6;
RFilter.FOR = 7;
RFilter.WHILE = 8;
RFilter.REPEAT = 9;
RFilter.FUNCTION = 10;
RFilter.ELSE = 11;
RFilter.IN = 12;
RFilter.LIST_ACCESS_START = 13;
RFilter.LIST_ACCESS_END = 14;
RFilter.ARRAY_ACCESS_START = 15;
RFilter.ARRAY_ACCESS_END = 16;
RFilter.NAMESPACE_ACCESS = 17;
RFilter.COMPONENT_ACCESS = 18;
RFilter.HELP = 19;
RFilter.NEXT = 20;
RFilter.BREAK = 21;
RFilter.NULL = 22;
RFilter.NA = 23;
RFilter.INF = 24;
RFilter.NAN = 25;
RFilter.TRUE = 26;
RFilter.FALSE = 27;
RFilter.NOT = 28;
RFilter.RANGE_OPERATOR = 29;
RFilter.MULT_DIV = 30;
RFilter.ADD_SUB = 31;
RFilter.COMPARATOR = 32;
RFilter.ASSIGN = 33;
RFilter.EQUALS = 34;
RFilter.AND = 35;
RFilter.OR = 36;
RFilter.PAREN_L = 37;
RFilter.PAREN_R = 38;
RFilter.CURLY_L = 39;
RFilter.CURLY_R = 40;
RFilter.HEX = 41;
RFilter.INT = 42;
RFilter.FLOAT = 43;
RFilter.COMPLEX = 44;
RFilter.STRING = 45;
RFilter.ID = 46;
RFilter.USER_OP = 47;
RFilter.NL = 48;
RFilter.SEMICOLON = 49;
RFilter.WS = 50;

RFilter.RULE_stream = 0;
RFilter.RULE_eat = 1;
RFilter.RULE_elem = 2;
RFilter.RULE_atom = 3;
RFilter.RULE_op = 4;

class StreamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_stream;
    }

	EOF() {
	    return this.getToken(RFilter.EOF, 0);
	};

	elem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElemContext);
	    } else {
	        return this.getTypedRuleContext(ElemContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.SEMICOLON);
	    } else {
	        return this.getToken(RFilter.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterStream(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitStream(this);
		}
	}


}



class EatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_eat;
        this._NL = null;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterEat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitEat(this);
		}
	}


}



class ElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_elem;
    }

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	eat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EatContext);
	    } else {
	        return this.getTypedRuleContext(EatContext,i);
	    }
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	CURLY_L() {
	    return this.getToken(RFilter.CURLY_L, 0);
	};

	CURLY_R() {
	    return this.getToken(RFilter.CURLY_R, 0);
	};

	elem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElemContext);
	    } else {
	        return this.getTypedRuleContext(ElemContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.NL);
	    } else {
	        return this.getToken(RFilter.NL, i);
	    }
	};


	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RFilter.SEMICOLON);
	    } else {
	        return this.getToken(RFilter.SEMICOLON, i);
	    }
	};


	PAREN_L() {
	    return this.getToken(RFilter.PAREN_L, 0);
	};

	PAREN_R() {
	    return this.getToken(RFilter.PAREN_R, 0);
	};

	ARRAY_ACCESS_START() {
	    return this.getToken(RFilter.ARRAY_ACCESS_START, 0);
	};

	ARRAY_ACCESS_END() {
	    return this.getToken(RFilter.ARRAY_ACCESS_END, 0);
	};

	LIST_ACCESS_START() {
	    return this.getToken(RFilter.LIST_ACCESS_START, 0);
	};

	LIST_ACCESS_END() {
	    return this.getToken(RFilter.LIST_ACCESS_END, 0);
	};

	FUNCTION() {
	    return this.getToken(RFilter.FUNCTION, 0);
	};

	FOR() {
	    return this.getToken(RFilter.FOR, 0);
	};

	WHILE() {
	    return this.getToken(RFilter.WHILE, 0);
	};

	IF() {
	    return this.getToken(RFilter.IF, 0);
	};

	ELSE() {
	    return this.getToken(RFilter.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitElem(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_atom;
    }

	NEXT() {
	    return this.getToken(RFilter.NEXT, 0);
	};

	BREAK() {
	    return this.getToken(RFilter.BREAK, 0);
	};

	ID() {
	    return this.getToken(RFilter.ID, 0);
	};

	STRING() {
	    return this.getToken(RFilter.STRING, 0);
	};

	HEX() {
	    return this.getToken(RFilter.HEX, 0);
	};

	INT() {
	    return this.getToken(RFilter.INT, 0);
	};

	FLOAT() {
	    return this.getToken(RFilter.FLOAT, 0);
	};

	COMPLEX() {
	    return this.getToken(RFilter.COMPLEX, 0);
	};

	NULL() {
	    return this.getToken(RFilter.NULL, 0);
	};

	NA() {
	    return this.getToken(RFilter.NA, 0);
	};

	INF() {
	    return this.getToken(RFilter.INF, 0);
	};

	NAN() {
	    return this.getToken(RFilter.NAN, 0);
	};

	TRUE() {
	    return this.getToken(RFilter.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(RFilter.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitAtom(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RFilter.RULE_op;
    }

	ADD_SUB() {
	    return this.getToken(RFilter.ADD_SUB, 0);
	};

	MULT_DIV() {
	    return this.getToken(RFilter.MULT_DIV, 0);
	};

	COMPARATOR() {
	    return this.getToken(RFilter.COMPARATOR, 0);
	};

	AND() {
	    return this.getToken(RFilter.AND, 0);
	};

	USER_OP() {
	    return this.getToken(RFilter.USER_OP, 0);
	};

	REPEAT() {
	    return this.getToken(RFilter.REPEAT, 0);
	};

	IN() {
	    return this.getToken(RFilter.IN, 0);
	};

	HELP() {
	    return this.getToken(RFilter.HELP, 0);
	};

	NOT() {
	    return this.getToken(RFilter.NOT, 0);
	};

	EQUALS() {
	    return this.getToken(RFilter.EQUALS, 0);
	};

	RANGE_OPERATOR() {
	    return this.getToken(RFilter.RANGE_OPERATOR, 0);
	};

	COMPONENT_ACCESS() {
	    return this.getToken(RFilter.COMPONENT_ACCESS, 0);
	};

	ASSIGN() {
	    return this.getToken(RFilter.ASSIGN, 0);
	};

	NAMESPACE_ACCESS() {
	    return this.getToken(RFilter.NAMESPACE_ACCESS, 0);
	};

	OR() {
	    return this.getToken(RFilter.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RFilterListener ) {
	        listener.exitOp(this);
		}
	}


}




RFilter.StreamContext = StreamContext;
RFilter.EatContext = EatContext;
RFilter.ElemContext = ElemContext;
RFilter.AtomContext = AtomContext;
RFilter.OpContext = OpContext;

// Generated from R.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RListener from './RListener.mjs';
const serializedATN = [4,1,50,221,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,5,0,21,8,0,10,0,12,0,24,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,38,8,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,58,8,1,
10,1,12,1,61,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,103,8,1,11,1,12,1,104,1,1,3,1,108,8,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,161,8,
1,10,1,12,1,164,9,1,1,2,1,2,1,2,3,2,169,8,2,5,2,171,8,2,10,2,12,2,174,9,
2,1,3,1,3,1,3,5,3,179,8,3,10,3,12,3,182,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
190,8,4,1,5,1,5,1,5,5,5,195,8,5,10,5,12,5,198,9,5,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,219,8,6,1,6,0,
1,2,7,0,2,4,6,8,10,12,0,2,1,0,48,49,1,0,33,34,276,0,22,1,0,0,0,2,107,1,0,
0,0,4,165,1,0,0,0,6,175,1,0,0,0,8,189,1,0,0,0,10,191,1,0,0,0,12,218,1,0,
0,0,14,16,7,0,0,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,
0,18,21,1,0,0,0,19,21,3,2,1,0,20,15,1,0,0,0,20,19,1,0,0,0,21,24,1,0,0,0,
22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,26,5,0,0,1,26,
1,1,0,0,0,27,28,6,1,-1,0,28,29,5,31,0,0,29,108,3,2,1,37,30,31,5,28,0,0,31,
108,3,2,1,31,32,33,5,2,0,0,33,108,3,2,1,28,34,35,5,10,0,0,35,37,5,37,0,0,
36,38,3,6,3,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,5,38,0,0,40,
108,3,2,1,25,41,42,5,39,0,0,42,43,3,4,2,0,43,44,5,40,0,0,44,108,1,0,0,0,
45,46,5,6,0,0,46,47,5,37,0,0,47,48,3,2,1,0,48,49,5,38,0,0,49,50,3,2,1,22,
50,108,1,0,0,0,51,52,5,6,0,0,52,53,5,37,0,0,53,54,3,2,1,0,54,55,5,38,0,0,
55,59,3,2,1,0,56,58,5,48,0,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,
60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,11,0,0,63,64,3,2,1,21,64,
108,1,0,0,0,65,66,5,7,0,0,66,67,5,37,0,0,67,68,5,46,0,0,68,69,5,12,0,0,69,
70,3,2,1,0,70,71,5,38,0,0,71,72,3,2,1,20,72,108,1,0,0,0,73,74,5,8,0,0,74,
75,5,37,0,0,75,76,3,2,1,0,76,77,5,38,0,0,77,78,3,2,1,19,78,108,1,0,0,0,79,
80,5,9,0,0,80,108,3,2,1,18,81,82,5,19,0,0,82,108,3,2,1,17,83,108,5,20,0,
0,84,108,5,21,0,0,85,86,5,37,0,0,86,87,3,2,1,0,87,88,5,38,0,0,88,108,1,0,
0,0,89,108,5,46,0,0,90,108,5,45,0,0,91,108,5,41,0,0,92,108,5,42,0,0,93,108,
5,43,0,0,94,108,5,44,0,0,95,108,5,22,0,0,96,108,5,23,0,0,97,108,5,24,0,0,
98,108,5,25,0,0,99,108,5,26,0,0,100,108,5,27,0,0,101,103,5,48,0,0,102,101,
1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,
106,108,3,2,1,1,107,27,1,0,0,0,107,30,1,0,0,0,107,32,1,0,0,0,107,34,1,0,
0,0,107,41,1,0,0,0,107,45,1,0,0,0,107,51,1,0,0,0,107,65,1,0,0,0,107,73,1,
0,0,0,107,79,1,0,0,0,107,81,1,0,0,0,107,83,1,0,0,0,107,84,1,0,0,0,107,85,
1,0,0,0,107,89,1,0,0,0,107,90,1,0,0,0,107,91,1,0,0,0,107,92,1,0,0,0,107,
93,1,0,0,0,107,94,1,0,0,0,107,95,1,0,0,0,107,96,1,0,0,0,107,97,1,0,0,0,107,
98,1,0,0,0,107,99,1,0,0,0,107,100,1,0,0,0,107,102,1,0,0,0,108,162,1,0,0,
0,109,110,10,40,0,0,110,111,5,17,0,0,111,161,3,2,1,41,112,113,10,39,0,0,
113,114,5,18,0,0,114,161,3,2,1,40,115,116,10,38,0,0,116,117,5,1,0,0,117,
161,3,2,1,38,118,119,10,36,0,0,119,120,5,29,0,0,120,161,3,2,1,37,121,122,
10,35,0,0,122,123,5,47,0,0,123,161,3,2,1,36,124,125,10,34,0,0,125,126,5,
30,0,0,126,161,3,2,1,35,127,128,10,33,0,0,128,129,5,31,0,0,129,161,3,2,1,
34,130,131,10,32,0,0,131,132,5,32,0,0,132,161,3,2,1,33,133,134,10,30,0,0,
134,135,5,35,0,0,135,161,3,2,1,31,136,137,10,29,0,0,137,138,5,36,0,0,138,
161,3,2,1,30,139,140,10,27,0,0,140,141,5,2,0,0,141,161,3,2,1,28,142,143,
10,26,0,0,143,144,7,1,0,0,144,161,3,2,1,27,145,146,10,42,0,0,146,147,5,13,
0,0,147,148,3,10,5,0,148,149,5,14,0,0,149,161,1,0,0,0,150,151,10,41,0,0,
151,152,5,15,0,0,152,153,3,10,5,0,153,154,5,16,0,0,154,161,1,0,0,0,155,156,
10,24,0,0,156,157,5,37,0,0,157,158,3,10,5,0,158,159,5,38,0,0,159,161,1,0,
0,0,160,109,1,0,0,0,160,112,1,0,0,0,160,115,1,0,0,0,160,118,1,0,0,0,160,
121,1,0,0,0,160,124,1,0,0,0,160,127,1,0,0,0,160,130,1,0,0,0,160,133,1,0,
0,0,160,136,1,0,0,0,160,139,1,0,0,0,160,142,1,0,0,0,160,145,1,0,0,0,160,
150,1,0,0,0,160,155,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,
0,0,163,3,1,0,0,0,164,162,1,0,0,0,165,172,3,2,1,0,166,168,7,0,0,0,167,169,
3,2,1,0,168,167,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,166,1,0,0,0,
171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,5,1,0,0,0,174,172,1,
0,0,0,175,180,3,8,4,0,176,177,5,3,0,0,177,179,3,8,4,0,178,176,1,0,0,0,179,
182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,7,1,0,0,0,182,180,1,0,0,
0,183,190,5,46,0,0,184,185,5,46,0,0,185,186,5,34,0,0,186,190,3,2,1,0,187,
190,5,4,0,0,188,190,5,5,0,0,189,183,1,0,0,0,189,184,1,0,0,0,189,187,1,0,
0,0,189,188,1,0,0,0,190,9,1,0,0,0,191,196,3,12,6,0,192,193,5,3,0,0,193,195,
3,12,6,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,
197,11,1,0,0,0,198,196,1,0,0,0,199,219,3,2,1,0,200,201,5,46,0,0,201,219,
5,34,0,0,202,203,5,46,0,0,203,204,5,34,0,0,204,219,3,2,1,0,205,206,5,45,
0,0,206,219,5,34,0,0,207,208,5,45,0,0,208,209,5,34,0,0,209,219,3,2,1,0,210,
211,5,22,0,0,211,219,5,34,0,0,212,213,5,22,0,0,213,214,5,34,0,0,214,219,
3,2,1,0,215,219,5,4,0,0,216,219,5,5,0,0,217,219,1,0,0,0,218,199,1,0,0,0,
218,200,1,0,0,0,218,202,1,0,0,0,218,205,1,0,0,0,218,207,1,0,0,0,218,210,
1,0,0,0,218,212,1,0,0,0,218,215,1,0,0,0,218,216,1,0,0,0,218,217,1,0,0,0,
219,13,1,0,0,0,15,17,20,22,37,59,104,107,160,162,168,172,180,189,196,218];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RParser extends antlr4.Parser {

    static grammarFileName = "R.g4";
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
    static ruleNames = [ "prog", "expr", "exprlist", "formlist", "form",
                         "sublist", "sub" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RParser.ruleNames;
        this.literalNames = RParser.literalNames;
        this.symbolicNames = RParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 40);
    		case 1:
    			return this.precpred(this._ctx, 39);
    		case 2:
    			return this.precpred(this._ctx, 38);
    		case 3:
    			return this.precpred(this._ctx, 36);
    		case 4:
    			return this.precpred(this._ctx, 35);
    		case 5:
    			return this.precpred(this._ctx, 34);
    		case 6:
    			return this.precpred(this._ctx, 33);
    		case 7:
    			return this.precpred(this._ctx, 32);
    		case 8:
    			return this.precpred(this._ctx, 30);
    		case 9:
    			return this.precpred(this._ctx, 29);
    		case 10:
    			return this.precpred(this._ctx, 27);
    		case 11:
    			return this.precpred(this._ctx, 26);
    		case 12:
    			return this.precpred(this._ctx, 42);
    		case 13:
    			return this.precpred(this._ctx, 41);
    		case 14:
    			return this.precpred(this._ctx, 24);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2683832260) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 7157) !== 0)) {
	            this.state = 20;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 15;
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 14;
	                		_la = this._input.LA(1);
	                		if(!(_la===48 || _la===49)) {
	                		this._errHandler.recoverInline(this);
	                		}
	                		else {
	                			this._errHandler.reportMatch(this);
	                		    this.consume();
	                		}
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 17;
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                break;

	            case 2:
	                this.state = 19;
	                this.expr(0);
	                break;

	            }
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(RParser.EOF);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, RParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SignContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 28;
	            this.match(RParser.ADD_SUB);
	            this.state = 29;
	            this.expr(37);
	            break;

	        case 2:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 30;
	            this.match(RParser.NOT);
	            this.state = 31;
	            this.expr(31);
	            break;

	        case 3:
	            localctx = new ModelFormulaePrefixContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 32;
	            this.match(RParser.T__1);
	            this.state = 33;
	            this.expr(28);
	            break;

	        case 4:
	            localctx = new FunctionDefinitionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            this.match(RParser.FUNCTION);
	            this.state = 35;
	            this.match(RParser.PAREN_L);
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===5 || _la===46) {
	                this.state = 36;
	                this.formlist();
	            }

	            this.state = 39;
	            this.match(RParser.PAREN_R);
	            this.state = 40;
	            this.expr(25);
	            break;

	        case 5:
	            localctx = new CompoundStatementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 41;
	            this.match(RParser.CURLY_L);
	            this.state = 42;
	            this.exprlist();
	            this.state = 43;
	            this.match(RParser.CURLY_R);
	            break;

	        case 6:
	            localctx = new IfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 45;
	            this.match(RParser.IF);
	            this.state = 46;
	            this.match(RParser.PAREN_L);
	            this.state = 47;
	            this.expr(0);
	            this.state = 48;
	            this.match(RParser.PAREN_R);
	            this.state = 49;
	            this.expr(22);
	            break;

	        case 7:
	            localctx = new IfElseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.match(RParser.IF);
	            this.state = 52;
	            this.match(RParser.PAREN_L);
	            this.state = 53;
	            this.expr(0);
	            this.state = 54;
	            this.match(RParser.PAREN_R);
	            this.state = 55;
	            this.expr(0);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===48) {
	                this.state = 56;
	                this.match(RParser.NL);
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 62;
	            this.match(RParser.ELSE);
	            this.state = 63;
	            this.expr(21);
	            break;

	        case 8:
	            localctx = new ForContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(RParser.FOR);
	            this.state = 66;
	            this.match(RParser.PAREN_L);
	            this.state = 67;
	            this.match(RParser.ID);
	            this.state = 68;
	            this.match(RParser.IN);
	            this.state = 69;
	            this.expr(0);
	            this.state = 70;
	            this.match(RParser.PAREN_R);
	            this.state = 71;
	            this.expr(20);
	            break;

	        case 9:
	            localctx = new WhileContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(RParser.WHILE);
	            this.state = 74;
	            this.match(RParser.PAREN_L);
	            this.state = 75;
	            this.expr(0);
	            this.state = 76;
	            this.match(RParser.PAREN_R);
	            this.state = 77;
	            this.expr(19);
	            break;

	        case 10:
	            localctx = new RepeatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 79;
	            this.match(RParser.REPEAT);
	            this.state = 80;
	            this.expr(18);
	            break;

	        case 11:
	            localctx = new HelpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 81;
	            this.match(RParser.HELP);
	            this.state = 82;
	            this.expr(17);
	            break;

	        case 12:
	            localctx = new NextContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.match(RParser.NEXT);
	            break;

	        case 13:
	            localctx = new BreakContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.match(RParser.BREAK);
	            break;

	        case 14:
	            localctx = new BracketTermContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(RParser.PAREN_L);
	            this.state = 86;
	            this.expr(0);
	            this.state = 87;
	            this.match(RParser.PAREN_R);
	            break;

	        case 15:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(RParser.ID);
	            break;

	        case 16:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(RParser.STRING);
	            break;

	        case 17:
	            localctx = new HexContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(RParser.HEX);
	            break;

	        case 18:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(RParser.INT);
	            break;

	        case 19:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            this.match(RParser.FLOAT);
	            break;

	        case 20:
	            localctx = new ComplexContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 94;
	            this.match(RParser.COMPLEX);
	            break;

	        case 21:
	            localctx = new NullContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(RParser.NULL);
	            break;

	        case 22:
	            localctx = new NaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(RParser.NA);
	            break;

	        case 23:
	            localctx = new InfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(RParser.INF);
	            break;

	        case 24:
	            localctx = new NanContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 98;
	            this.match(RParser.NAN);
	            break;

	        case 25:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 99;
	            this.match(RParser.TRUE);
	            break;

	        case 26:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 100;
	            this.match(RParser.FALSE);
	            break;

	        case 27:
	            localctx = new NewlineContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 101;
	            		this.match(RParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 104;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 106;
	            this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 160;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new NamespaceAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 40))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
	                    }
	                    this.state = 110;
	                    this.match(RParser.NAMESPACE_ACCESS);
	                    this.state = 111;
	                    this.expr(41);
	                    break;

	                case 2:
	                    localctx = new ComponentAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 39))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
	                    }
	                    this.state = 113;
	                    this.match(RParser.COMPONENT_ACCESS);
	                    this.state = 114;
	                    this.expr(40);
	                    break;

	                case 3:
	                    localctx = new ExponentContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 115;
	                    if (!( this.precpred(this._ctx, 38))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
	                    }
	                    this.state = 116;
	                    this.match(RParser.T__0);
	                    this.state = 117;
	                    this.expr(38);
	                    break;

	                case 4:
	                    localctx = new RangeContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 36))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
	                    }
	                    this.state = 119;
	                    this.match(RParser.RANGE_OPERATOR);
	                    this.state = 120;
	                    this.expr(37);
	                    break;

	                case 5:
	                    localctx = new UserDefinedOperationContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 35))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
	                    }
	                    this.state = 122;
	                    this.match(RParser.USER_OP);
	                    this.state = 123;
	                    this.expr(36);
	                    break;

	                case 6:
	                    localctx = new MultOrDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 34))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
	                    }
	                    this.state = 125;
	                    this.match(RParser.MULT_DIV);
	                    this.state = 126;
	                    this.expr(35);
	                    break;

	                case 7:
	                    localctx = new AddOrSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 33))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
	                    }
	                    this.state = 128;
	                    this.match(RParser.ADD_SUB);
	                    this.state = 129;
	                    this.expr(34);
	                    break;

	                case 8:
	                    localctx = new ComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 32))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
	                    }
	                    this.state = 131;
	                    this.match(RParser.COMPARATOR);
	                    this.state = 132;
	                    this.expr(33);
	                    break;

	                case 9:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 30))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
	                    }
	                    this.state = 134;
	                    this.match(RParser.AND);
	                    this.state = 135;
	                    this.expr(31);
	                    break;

	                case 10:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 136;
	                    if (!( this.precpred(this._ctx, 29))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
	                    }
	                    this.state = 137;
	                    this.match(RParser.OR);
	                    this.state = 138;
	                    this.expr(30);
	                    break;

	                case 11:
	                    localctx = new ModelFormulaeInfixContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 139;
	                    if (!( this.precpred(this._ctx, 27))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
	                    }
	                    this.state = 140;
	                    this.match(RParser.T__1);
	                    this.state = 141;
	                    this.expr(28);
	                    break;

	                case 12:
	                    localctx = new AssignmentContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 142;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 143;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===34)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 144;
	                    this.expr(27);
	                    break;

	                case 13:
	                    localctx = new ListAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 145;
	                    if (!( this.precpred(this._ctx, 42))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
	                    }
	                    this.state = 146;
	                    this.match(RParser.LIST_ACCESS_START);
	                    this.state = 147;
	                    this.sublist();
	                    this.state = 148;
	                    this.match(RParser.LIST_ACCESS_END);
	                    break;

	                case 14:
	                    localctx = new ArrayAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 41))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
	                    }
	                    this.state = 151;
	                    this.match(RParser.ARRAY_ACCESS_START);
	                    this.state = 152;
	                    this.sublist();
	                    this.state = 153;
	                    this.match(RParser.ARRAY_ACCESS_END);
	                    break;

	                case 15:
	                    localctx = new FunctionCallContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
	                    this.state = 155;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 156;
	                    this.match(RParser.PAREN_L);
	                    this.state = 157;
	                    this.sublist();
	                    this.state = 158;
	                    this.match(RParser.PAREN_R);
	                    break;

	                }
	            }
	            this.state = 164;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	exprlist() {
	    let localctx = new ExprlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RParser.RULE_exprlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.expr(0);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48 || _la===49) {
	            this.state = 166;
	            _la = this._input.LA(1);
	            if(!(_la===48 || _la===49)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 167;
	                this.expr(0);

	            }
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	formlist() {
	    let localctx = new FormlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RParser.RULE_formlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.form();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 176;
	            this.match(RParser.T__2);
	            this.state = 177;
	            this.form();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	form() {
	    let localctx = new FormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RParser.RULE_form);
	    try {
	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.match(RParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.match(RParser.ID);
	            this.state = 185;
	            this.match(RParser.EQUALS);
	            this.state = 186;
	            this.expr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 187;
	            this.match(RParser.T__3);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 188;
	            this.match(RParser.T__4);
	            break;

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



	sublist() {
	    let localctx = new SublistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RParser.RULE_sublist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.sub();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 192;
	            this.match(RParser.T__2);
	            this.state = 193;
	            this.sub();
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	sub() {
	    let localctx = new SubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RParser.RULE_sub);
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.match(RParser.ID);
	            this.state = 201;
	            this.match(RParser.EQUALS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.match(RParser.ID);
	            this.state = 203;
	            this.match(RParser.EQUALS);
	            this.state = 204;
	            this.expr(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
	            this.match(RParser.STRING);
	            this.state = 206;
	            this.match(RParser.EQUALS);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 207;
	            this.match(RParser.STRING);
	            this.state = 208;
	            this.match(RParser.EQUALS);
	            this.state = 209;
	            this.expr(0);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.match(RParser.NULL);
	            this.state = 211;
	            this.match(RParser.EQUALS);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 212;
	            this.match(RParser.NULL);
	            this.state = 213;
	            this.match(RParser.EQUALS);
	            this.state = 214;
	            this.expr(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 215;
	            this.match(RParser.T__3);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 216;
	            this.match(RParser.T__4);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);

	            break;

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

RParser.EOF = antlr4.Token.EOF;
RParser.T__0 = 1;
RParser.T__1 = 2;
RParser.T__2 = 3;
RParser.T__3 = 4;
RParser.T__4 = 5;
RParser.IF = 6;
RParser.FOR = 7;
RParser.WHILE = 8;
RParser.REPEAT = 9;
RParser.FUNCTION = 10;
RParser.ELSE = 11;
RParser.IN = 12;
RParser.LIST_ACCESS_START = 13;
RParser.LIST_ACCESS_END = 14;
RParser.ARRAY_ACCESS_START = 15;
RParser.ARRAY_ACCESS_END = 16;
RParser.NAMESPACE_ACCESS = 17;
RParser.COMPONENT_ACCESS = 18;
RParser.HELP = 19;
RParser.NEXT = 20;
RParser.BREAK = 21;
RParser.NULL = 22;
RParser.NA = 23;
RParser.INF = 24;
RParser.NAN = 25;
RParser.TRUE = 26;
RParser.FALSE = 27;
RParser.NOT = 28;
RParser.RANGE_OPERATOR = 29;
RParser.MULT_DIV = 30;
RParser.ADD_SUB = 31;
RParser.COMPARATOR = 32;
RParser.ASSIGN = 33;
RParser.EQUALS = 34;
RParser.AND = 35;
RParser.OR = 36;
RParser.PAREN_L = 37;
RParser.PAREN_R = 38;
RParser.CURLY_L = 39;
RParser.CURLY_R = 40;
RParser.HEX = 41;
RParser.INT = 42;
RParser.FLOAT = 43;
RParser.COMPLEX = 44;
RParser.STRING = 45;
RParser.ID = 46;
RParser.USER_OP = 47;
RParser.NL = 48;
RParser.SEMICOLON = 49;
RParser.WS = 50;

RParser.RULE_prog = 0;
RParser.RULE_expr = 1;
RParser.RULE_exprlist = 2;
RParser.RULE_formlist = 3;
RParser.RULE_form = 4;
RParser.RULE_sublist = 5;
RParser.RULE_sub = 6;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(RParser.EOF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.SEMICOLON);
	    } else {
	        return this.getToken(RParser.SEMICOLON, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitProg(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_expr;
    }



		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InfContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INF() {
	    return this.getToken(RParser.INF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterInf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitInf(this);
		}
	}


}

RParser.InfContext = InfContext;

class NullContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(RParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNull(this);
		}
	}


}

RParser.NullContext = NullContext;

class HelpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	HELP() {
	    return this.getToken(RParser.HELP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterHelp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitHelp(this);
		}
	}


}

RParser.HelpContext = HelpContext;

class OrContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OR() {
	    return this.getToken(RParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitOr(this);
		}
	}


}

RParser.OrContext = OrContext;

class ExponentContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterExponent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitExponent(this);
		}
	}


}

RParser.ExponentContext = ExponentContext;

class IfElseContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(RParser.IF, 0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	ELSE() {
	    return this.getToken(RParser.ELSE, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterIfElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitIfElse(this);
		}
	}


}

RParser.IfElseContext = IfElseContext;

class BreakContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BREAK() {
	    return this.getToken(RParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitBreak(this);
		}
	}


}

RParser.BreakContext = BreakContext;

class TrueContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(RParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterTrue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitTrue(this);
		}
	}


}

RParser.TrueContext = TrueContext;

class RepeatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REPEAT() {
	    return this.getToken(RParser.REPEAT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterRepeat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitRepeat(this);
		}
	}


}

RParser.RepeatContext = RepeatContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(RParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitString(this);
		}
	}


}

RParser.StringContext = StringContext;

class FalseContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(RParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFalse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFalse(this);
		}
	}


}

RParser.FalseContext = FalseContext;

class NewlineContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNewline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNewline(this);
		}
	}


}

RParser.NewlineContext = NewlineContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(RParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitInt(this);
		}
	}


}

RParser.IntContext = IntContext;

class ComplexContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	COMPLEX() {
	    return this.getToken(RParser.COMPLEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterComplex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitComplex(this);
		}
	}


}

RParser.ComplexContext = ComplexContext;

class AssignmentContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ASSIGN() {
	    return this.getToken(RParser.ASSIGN, 0);
	};

	EQUALS() {
	    return this.getToken(RParser.EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitAssignment(this);
		}
	}


}

RParser.AssignmentContext = AssignmentContext;

class AddOrSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD_SUB() {
	    return this.getToken(RParser.ADD_SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterAddOrSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitAddOrSub(this);
		}
	}


}

RParser.AddOrSubContext = AddOrSubContext;

class ArrayAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ARRAY_ACCESS_START() {
	    return this.getToken(RParser.ARRAY_ACCESS_START, 0);
	};

	sublist() {
	    return this.getTypedRuleContext(SublistContext,0);
	};

	ARRAY_ACCESS_END() {
	    return this.getToken(RParser.ARRAY_ACCESS_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterArrayAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitArrayAccess(this);
		}
	}


}

RParser.ArrayAccessContext = ArrayAccessContext;

class NaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NA() {
	    return this.getToken(RParser.NA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNa(this);
		}
	}


}

RParser.NaContext = NaContext;

class ComponentAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMPONENT_ACCESS() {
	    return this.getToken(RParser.COMPONENT_ACCESS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterComponentAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitComponentAccess(this);
		}
	}


}

RParser.ComponentAccessContext = ComponentAccessContext;

class ComparisonContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMPARATOR() {
	    return this.getToken(RParser.COMPARATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitComparison(this);
		}
	}


}

RParser.ComparisonContext = ComparisonContext;

class UserDefinedOperationContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	USER_OP() {
	    return this.getToken(RParser.USER_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterUserDefinedOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitUserDefinedOperation(this);
		}
	}


}

RParser.UserDefinedOperationContext = UserDefinedOperationContext;

class FunctionDefinitionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUNCTION() {
	    return this.getToken(RParser.FUNCTION, 0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	formlist() {
	    return this.getTypedRuleContext(FormlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFunctionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFunctionDefinition(this);
		}
	}


}

RParser.FunctionDefinitionContext = FunctionDefinitionContext;

class FunctionCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	sublist() {
	    return this.getTypedRuleContext(SublistContext,0);
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}

RParser.FunctionCallContext = FunctionCallContext;

class MultOrDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MULT_DIV() {
	    return this.getToken(RParser.MULT_DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterMultOrDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitMultOrDiv(this);
		}
	}


}

RParser.MultOrDivContext = MultOrDivContext;

class BracketTermContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterBracketTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitBracketTerm(this);
		}
	}


}

RParser.BracketTermContext = BracketTermContext;

class ModelFormulaePrefixContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterModelFormulaePrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitModelFormulaePrefix(this);
		}
	}


}

RParser.ModelFormulaePrefixContext = ModelFormulaePrefixContext;

class CompoundStatementContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CURLY_L() {
	    return this.getToken(RParser.CURLY_L, 0);
	};

	exprlist() {
	    return this.getTypedRuleContext(ExprlistContext,0);
	};

	CURLY_R() {
	    return this.getToken(RParser.CURLY_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterCompoundStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitCompoundStatement(this);
		}
	}


}

RParser.CompoundStatementContext = CompoundStatementContext;

class ModelFormulaeInfixContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterModelFormulaeInfix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitModelFormulaeInfix(this);
		}
	}


}

RParser.ModelFormulaeInfixContext = ModelFormulaeInfixContext;

class ListAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	LIST_ACCESS_START() {
	    return this.getToken(RParser.LIST_ACCESS_START, 0);
	};

	sublist() {
	    return this.getTypedRuleContext(SublistContext,0);
	};

	LIST_ACCESS_END() {
	    return this.getToken(RParser.LIST_ACCESS_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterListAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitListAccess(this);
		}
	}


}

RParser.ListAccessContext = ListAccessContext;

class ForContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR() {
	    return this.getToken(RParser.FOR, 0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	IN() {
	    return this.getToken(RParser.IN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFor(this);
		}
	}


}

RParser.ForContext = ForContext;

class WhileContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(RParser.WHILE, 0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitWhile(this);
		}
	}


}

RParser.WhileContext = WhileContext;

class RangeContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RANGE_OPERATOR() {
	    return this.getToken(RParser.RANGE_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitRange(this);
		}
	}


}

RParser.RangeContext = RangeContext;

class FloatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(RParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFloat(this);
		}
	}


}

RParser.FloatContext = FloatContext;

class NotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(RParser.NOT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNot(this);
		}
	}


}

RParser.NotContext = NotContext;

class AndContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(RParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitAnd(this);
		}
	}


}

RParser.AndContext = AndContext;

class NextContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEXT() {
	    return this.getToken(RParser.NEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNext(this);
		}
	}


}

RParser.NextContext = NextContext;

class SignContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ADD_SUB() {
	    return this.getToken(RParser.ADD_SUB, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitSign(this);
		}
	}


}

RParser.SignContext = SignContext;

class HexContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	HEX() {
	    return this.getToken(RParser.HEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterHex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitHex(this);
		}
	}


}

RParser.HexContext = HexContext;

class NanContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NAN() {
	    return this.getToken(RParser.NAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNan(this);
		}
	}


}

RParser.NanContext = NanContext;

class NamespaceAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NAMESPACE_ACCESS() {
	    return this.getToken(RParser.NAMESPACE_ACCESS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterNamespaceAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitNamespaceAccess(this);
		}
	}


}

RParser.NamespaceAccessContext = NamespaceAccessContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitId(this);
		}
	}


}

RParser.IdContext = IdContext;

class IfContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(RParser.IF, 0);
	};

	PAREN_L() {
	    return this.getToken(RParser.PAREN_L, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PAREN_R() {
	    return this.getToken(RParser.PAREN_R, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitIf(this);
		}
	}


}

RParser.IfContext = IfContext;

class ExprlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_exprlist;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.SEMICOLON);
	    } else {
	        return this.getToken(RParser.SEMICOLON, i);
	    }
	};


	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RParser.NL);
	    } else {
	        return this.getToken(RParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterExprlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitExprlist(this);
		}
	}


}



class FormlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_formlist;
    }

	form = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormContext);
	    } else {
	        return this.getTypedRuleContext(FormContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterFormlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitFormlist(this);
		}
	}


}



class FormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_form;
    }

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(RParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitForm(this);
		}
	}


}



class SublistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_sublist;
    }

	sub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubContext);
	    } else {
	        return this.getTypedRuleContext(SubContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterSublist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitSublist(this);
		}
	}


}



class SubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RParser.RULE_sub;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(RParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(RParser.EQUALS, 0);
	};

	STRING() {
	    return this.getToken(RParser.STRING, 0);
	};

	NULL() {
	    return this.getToken(RParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.enterSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RListener ) {
	        listener.exitSub(this);
		}
	}


}




RParser.ProgContext = ProgContext;
RParser.ExprContext = ExprContext;
RParser.ExprlistContext = ExprlistContext;
RParser.FormlistContext = FormlistContext;
RParser.FormContext = FormContext;
RParser.SublistContext = SublistContext;
RParser.SubContext = SubContext;


(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'simpleButton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_hotspot}","mouseenter",function(sym,e){sym.stop("enter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot}","mouseleave",function(sym,e){sym.stop("normal");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot}","mouseup",function(sym,e){sym.stop("enter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hotspot}","mousedown",function(sym,e){sym.stop("down");});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var title=sym.getSymbolElement().attr("title");sym.$("label").html(title);});
//Edge binding end
})("simpleButton");
//Edge symbol end:'simpleButton'

//=========================================================

//Edge symbol: 'NegVoltage'
(function(symbolName){})("NegVoltage");
//Edge symbol end:'NegVoltage'

//=========================================================

//Edge symbol: 'ZeroVoltage'
(function(symbolName){})("ZeroVoltage");
//Edge symbol end:'ZeroVoltage'

//=========================================================

//Edge symbol: 'PosVoltage'
(function(symbolName){})("PosVoltage");
//Edge symbol end:'PosVoltage'

//=========================================================

//Edge symbol: 'question'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Text2").html("?");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1024,function(sym,e){sym.$("Text2").html("-");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2040,function(sym,e){sym.$("Text2").html("0");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.$("Text2").html("+");});
//Edge binding end
})("question");
//Edge symbol end:'question'

//=========================================================

//Edge symbol: 'tube2'
(function(symbolName){})("tube2");
//Edge symbol end:'tube2'
})(jQuery,AdobeEdge,"EDGE-14567786");
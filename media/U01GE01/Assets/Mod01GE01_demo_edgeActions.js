
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Pos_btn}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("Pos_btn");mySymbolObject.stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Pos_btn}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("Pos_btn");mySymbolObject.stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Zero_btn}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("Zero_btn");mySymbolObject.stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Zero_btn}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("Zero_btn");mySymbolObject.stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_begin}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("begin");mySymbolObject.stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_begin}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("begin");mySymbolObject.stop("up");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){console.log("at q1");sym.getSymbol("question").stop(0000);sym.getSymbol("given").stop("negative");sym.getSymbol("Timer").play(0000);sym.getSymbol("Feedbackground").stop(0000);sym.$("Feedback").html("GO!");sym.setVariable("p","true");sym.setVariable("n","false");sym.setVariable("z","true");console.log("qnum =  "+qnum);sym.stop();if(totalq>8){var p=sym.getVariable("p");var n=sym.getVariable("n");var z=sym.getVariable("z");if(p=="true"){sym.$("Pos_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Pos_btn").addClass("lti-incorrect").removeClass("lti-correct");}
if(n=="true"){sym.$("Neg_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Neg_btn").addClass("lti-incorrect").removeClass("lti-correct")}
if(z=="true"){sym.$("Zero_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Zero_btn").addClass("lti-incorrect").removeClass("lti-correct")}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){console.log("at q2");sym.getSymbol("question").stop(0000);sym.getSymbol("given").stop("zero");sym.getSymbol("Timer").play(0000);sym.getSymbol("Feedbackground").stop(0000);sym.$("Feedback").html("GO!");sym.setVariable("p","wrong");sym.setVariable("n","true");sym.setVariable("z","false");console.log("qnum =  "+qnum);if(totalq>8){var p=sym.getVariable("p");var n=sym.getVariable("n");var z=sym.getVariable("z");if(p=="true"){sym.$("Pos_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Pos_btn").addClass("lti-incorrect").removeClass("lti-correct");}
if(n=="true"){sym.$("Neg_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Neg_btn").addClass("lti-incorrect").removeClass("lti-correct")}
if(z=="true"){sym.$("Zero_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Zero_btn").addClass("lti-incorrect").removeClass("lti-correct")}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){console.log("at q3");sym.getSymbol("question").stop(0000);sym.getSymbol("given").stop("zero");sym.getSymbol("Timer").play(0000);sym.getSymbol("Feedbackground").stop(0000);sym.$("Feedback").html("GO!");sym.setVariable("p","true");sym.setVariable("n","wrong");sym.setVariable("z","false");console.log("qnum =  "+qnum);if(totalq>8){var p=sym.getVariable("p");var n=sym.getVariable("n");var z=sym.getVariable("z");if(p=="true"){sym.$("Pos_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Pos_btn").addClass("lti-incorrect").removeClass("lti-correct");}
if(n=="true"){sym.$("Neg_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Neg_btn").addClass("lti-incorrect").removeClass("lti-correct")}
if(z=="true"){sym.$("Zero_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Zero_btn").addClass("lti-incorrect").removeClass("lti-correct")}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){console.log("at q4");sym.getSymbol("question").stop(0000);sym.getSymbol("given").stop("positive");sym.getSymbol("Timer").play(0000);sym.getSymbol("Feedbackground").stop(0000);sym.$("Feedback").html("GO!");sym.setVariable("p","false");sym.setVariable("n","true");sym.setVariable("z","true");console.log("qnum =  "+qnum);if(totalq>8){var p=sym.getVariable("p");var n=sym.getVariable("n");var z=sym.getVariable("z");if(p=="true"){sym.$("Pos_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Pos_btn").addClass("lti-incorrect").removeClass("lti-correct");}
if(n=="true"){sym.$("Neg_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Neg_btn").addClass("lti-incorrect").removeClass("lti-correct")}
if(z=="true"){sym.$("Zero_btn").addClass("lti-correct").removeClass("lti-incorrect");}else{sym.$("Zero_btn").addClass("lti-incorrect").removeClass("lti-correct")}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){qArray=new Array();var qHashObject=new Object();for(var i=0;i<4;i++){qHashObject[i.toString()]=0;}
while(qArray.length<4){var randNum=Math.floor(Math.random()*100)%4;if(qHashObject[randNum.toString()]<1){qHashObject[randNum.toString()]+=1;qArray.push(randNum+1);console.log("randNum =  "+randNum);}
else{continue;}}
console.log("qArray =  "+qArray);qnum=0;totalq=0;cornumber=0;console.log("qnum =  "+qnum);sym.$("Feedback").html("");sym.getSymbol("Feedbackground").stop(0000);sym.getSymbol("Timer").stop(0000);sym.getSymbol("electAni").stop(0000);sym.$("Next_btn").hide();sym.setVariable("cornumber",0);sym.$("questans").html("0");sym.$("correctans").html("0");sym.$("correct").html("Answer");var mySymbolObject=sym.getSymbol("given");mySymbolObject.stop("negative");var mySymbolObject=sym.getSymbol("question");mySymbolObject.stop(0000);sym.setVariable("p","false");sym.setVariable("n","false");sym.setVariable("z","false");function nextQuest()
{}
sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next_btn}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("Next_btn");mySymbolObject.stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next_btn}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("Next_btn");mySymbolObject.stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Neg_btn}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("Neg_btn");mySymbolObject.stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Neg_btn}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("Neg_btn");mySymbolObject.stop("up");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.getSymbol("Feedbackground").stop("wrong");sym.$("Feedback").html("Time's up!");sym.$("questans").html("0");sym.$("failure1")[0].play();cornumber=0;sym.$("Next_btn").show();console.log("var test is set at "+sym.getVariable("cornumber"));if(qvalue==1){sym.stop("a1");}else if(qvalue==2){sym.stop("a2");}else if(qvalue==3){sym.stop("a3");}else if(qvalue==4){sym.stop("a4");}else{}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){console.log("at a1");console.log(totalq);console.log(cornumber);if(totalq==8){sym.$("Feedback").html("You have answered eight questions. Begin Phase 2.");sym.$("instructions").html("Answer 8 questions in a row correctly.");sym.$("phase").html("Phase 2");cornumber=0;}
if(totalq>8){}else{sym.$("questans").html(totalq);}
if(cornumber==8){console.log("cornumber == 8");sym.$("Feedback").addClass("lti-complete").html("Congratulations! You have met your goal!");sym.$("Next_btn").hide();}else{console.log("not last question");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){console.log("at a2");console.log(totalq);console.log(cornumber);console.log(totalq);if(totalq==8){sym.$("Feedback").html("You have answered eight questions. Begin Phase 2.");sym.$("instructions").html("Answer 8 questions in a row correctly.");sym.$("phase").html("Phase 2");cornumber=0;}
if(totalq>8){}else{sym.$("questans").html(totalq);}
if(cornumber==8){console.log("cornumber == 8");sym.$("Feedback").addClass("lti-complete").html("Congratulations! You have met your goal!");sym.$("Next_btn").hide();}else{console.log("not last question");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){console.log("at a3");console.log(totalq);console.log(cornumber);if(totalq==8){sym.$("Feedback").html("You have answered eight questions. Begin Phase 2.");sym.$("instructions").html("Answer 8 questions in a row correctly.");sym.$("phase").html("Phase 2");cornumber=0;}
if(totalq>8){}else{sym.$("questans").html(totalq);}
if(cornumber==8){console.log("cornumber == 8");sym.$("Feedback").addClass("lti-complete").html("Congratulations! You have met your goal!");sym.$("Next_btn").hide();}else{console.log("not last question");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){console.log("at a4");console.log(totalq);console.log(cornumber);if(totalq==8){sym.$("Feedback").html("You have answered eight questions. Begin Phase 2.");sym.$("instructions").html("Answer 8 questions in a row correctly.");sym.$("phase").html("Phase 2");cornumber=0;}
if(totalq>8){}else{sym.$("questans").html(totalq);}
if(cornumber==8){console.log("cornumber == 8");sym.$("Feedback").addClass("lti-complete").html("Congratulations! You have met your goal!");sym.$("Next_btn").hide();}else{console.log("not last question");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Start_btn}","mouseover",function(sym,e){sym.getSymbol("Start_btn").stop("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Start_btn}","mouseout",function(sym,e){sym.getSymbol("Start_btn").stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Start_btn}","click",function(sym,e){sym.stop(0000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){console.log("timeline nextq");sym.$("Feedback").html("");sym.getSymbol("electAni").play("drop");sym.getSymbol("given").stop(0000);sym.getSymbol("question").stop(0000);sym.getSymbol("Feedbackground").stop(0000);sym.getSymbol("Pos_graphic").stop(0000);sym.getSymbol("Zero_graphic").stop(0000);sym.getSymbol("Neg_graphic").stop(0000);sym.getSymbol("Timer").stop(0000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.$("Feedback").html("Go!");console.log("qArray =  "+qArray);console.log("qnum =  "+qnum);qvalue=qArray[qnum.toString()];console.log("nextQuest running"+qvalue);qnum++;totalq++;console.log(totalq);console.log("qnum =  "+qnum);if(qvalue==1){sym.stop("q1");}else if(qvalue==2){sym.stop("q2");}else if(qvalue==3){sym.stop("q3");}else if(qvalue==4){sym.stop("q4");}else{console.log("if else not working");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Pos_btn}","mousedown",function(sym,e){var mySymbolObject=sym.getSymbol("Pos_btn");mySymbolObject.stop("down");sym.$("buttonclick")[0].play();var mySymbolObject=sym.getSymbol("question");mySymbolObject.stop("positive");var mySymbolObject=sym.getSymbol("Timer");mySymbolObject.stop();var mySymbolObject=sym.getSymbol("Pos_graphic");mySymbolObject.stop("down");var mySymbolObject=sym.getSymbol("Zero_graphic");mySymbolObject.stop("up");var mySymbolObject=sym.getSymbol("Neg_graphic");mySymbolObject.stop("up");sym.$("Feedbackground").hide();sym.$("Feedback").hide();var pos=sym.getVariable("p");if(pos=="true"){console.log("true");sym.getSymbol("electAni").play("roll");sym.getSymbol("Feedbackground").stop("correct");sym.$("Feedback").html("Yes, that's correct!");cornumber++;}else if(pos=="wrong"){console.log("false1");sym.getSymbol("electAni").play("left");sym.getSymbol("Feedbackground").stop("wrong");sym.$("Feedback").html("The electron is going in the wrong direction!");cornumber=0;}else{console.log("false2");sym.getSymbol("Feedbackground").stop("wrong");sym.$("failure1")[0].play();sym.$("Feedback").show();sym.$("Feedbackground").show();sym.$("Feedback").html("That electron isn't moving!");cornumber=0;sym.$("Next_btn").show();if(totalq>8){sym.$("questans").html(cornumber);}}
console.log("qvalue = "+qvalue);if(qvalue==1){sym.stop("a1");}else if(qvalue==2){sym.stop("a2");}else if(qvalue==3){sym.stop("a3");}else if(qvalue==4){sym.stop("a4");}else{console.log("not advancing to qvalue");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){qArray=new Array();var qHashObject=new Object();for(var i=0;i<4;i++){qHashObject[i.toString()]=0;}
while(qArray.length<4){var randNum=Math.floor(Math.random()*100)%4;if(qHashObject[randNum.toString()]<1){qHashObject[randNum.toString()]+=1;qArray.push(randNum+1);console.log("randNum =  "+randNum);}
else{continue;}}
console.log("qArray =  "+qArray);qnum=0;console.log("qnum =  "+qnum);sym.play("nextq");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Zero_btn}","mousedown",function(sym,e){var mySymbolObject=sym.getSymbol("Zero_btn");mySymbolObject.stop("down");sym.$("buttonclick")[0].play();sym.$("buttonclick")[0].volume=0.2;var mySymbolObject=sym.getSymbol("question");mySymbolObject.stop("zero");var mySymbolObject=sym.getSymbol("Timer");mySymbolObject.stop();var mySymbolObject=sym.getSymbol("Pos_graphic");mySymbolObject.stop("up");var mySymbolObject=sym.getSymbol("Zero_graphic");mySymbolObject.stop("down");var mySymbolObject=sym.getSymbol("Neg_graphic");mySymbolObject.stop("up");sym.$("Feedbackground").hide();sym.$("Feedback").hide();var zero=sym.getVariable("z");if(zero=="true"){console.log("true");var attempts=sym.getVariable("totalq")
cornumber++;sym.getSymbol("electAni").play("roll");sym.getSymbol("Feedbackground").stop("correct");sym.$("Feedback").html("Yes, that's correct!");}else if(zero=="wrong"){console.log("false1");sym.getSymbol("electAni").play("left");sym.getSymbol("Feedbackground").stop("wrong");sym.$("Feedback").html("The electron is going in the wrong direction!");cornumber=0;}else{console.log("false2");sym.getSymbol("Feedbackground").stop("wrong");sym.$("failure1")[0].play();sym.$("Feedback").show();sym.$("Feedbackground").show();sym.$("Feedback").html("That electron isn't moving!");cornumber=0;sym.$("Next_btn").show();if(totalq>8){sym.$("questans").html(cornumber);}}
console.log("qvalue = "+qvalue);if(qvalue==1){sym.stop("a1");}else if(qvalue==2){sym.stop("a2");}else if(qvalue==3){sym.stop("a3");}else if(qvalue==4){sym.stop("a4");}else{console.log("not advancing to qvalue");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Neg_btn}","mousedown",function(sym,e){var mySymbolObject=sym.getSymbol("Neg_btn");mySymbolObject.stop("down");sym.$("buttonclick")[0].play();var mySymbolObject=sym.getSymbol("question");mySymbolObject.stop("negative");var mySymbolObject=sym.getSymbol("Timer");mySymbolObject.stop();var mySymbolObject=sym.getSymbol("Pos_graphic");mySymbolObject.stop("up");var mySymbolObject=sym.getSymbol("Zero_graphic");mySymbolObject.stop("up");var mySymbolObject=sym.getSymbol("Neg_graphic");mySymbolObject.stop("down");var neg=sym.getVariable("n");sym.$("Feedbackground").hide();sym.$("Feedback").hide();if(neg=="true"){console.log("true");var attempts=sym.getVariable("totalq")
cornumber++;sym.getSymbol("electAni").play("roll");sym.getSymbol("Feedbackground").stop("correct");sym.$("Feedback").html("Yes, that's correct!");}else if(neg=="wrong"){console.log("false1");sym.getSymbol("electAni").play("left");sym.getSymbol("Feedbackground").stop("wrong");sym.$("Feedback").html("The electron is going in the wrong direction!");cornumber=0;}else{console.log("false2");sym.getSymbol("Feedbackground").stop("wrong");sym.$("failure1")[0].play();sym.$("Feedback").html("That electron isn't moving!");sym.$("Feedback").show();sym.$("Feedbackground").show();cornumber=0;sym.$("Next_btn").show();if(totalq>8){sym.$("questans").html(cornumber);}}
console.log("qvalue = "+qvalue);if(qvalue==1){sym.stop("a1");}else if(qvalue==2){sym.stop("a2");}else if(qvalue==3){sym.stop("a3");}else if(qvalue==4){sym.stop("a4");}else{console.log("not advancing to qvalue");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_begin}","mousedown",function(sym,e){var mySymbolObject=sym.getSymbol("begin");mySymbolObject.stop("down");sym.$("buttonclick")[0].play();sym.play("nextq");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next_btn}","mousedown",function(sym,e){sym.$("buttonclick")[0].play();sym.$("Next_btn").hide();if(totalq==8){cornumber=0;sym.$("correct").html("Consecutive correct:");sym.$("questans").html(cornumber);}
if(totalq==24){sym.stop(0000);}else if(qnum==4){sym.stop("reorder");}else{sym.play("nextq");}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'NegVoltage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var correct=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3065,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2042,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1079,function(sym,e){sym.stop();});
//Edge binding end
})("NegVoltage");
//Edge symbol end:'NegVoltage'

//=========================================================

//Edge symbol: 'neg'
(function(symbolName){})("neg");
//Edge symbol end:'neg'

//=========================================================

//Edge symbol: 'ZeroVoltage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var correct=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2065,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1093,function(sym,e){sym.stop();});
//Edge binding end
})("ZeroVoltage");
//Edge symbol end:'ZeroVoltage'

//=========================================================

//Edge symbol: 'zero'
(function(symbolName){})("zero");
//Edge symbol end:'zero'

//=========================================================

//Edge symbol: 'PosVoltage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var correct=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3049,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2063,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1108,function(sym,e){sym.stop();});
//Edge binding end
})("PosVoltage");
//Edge symbol end:'PosVoltage'

//=========================================================

//Edge symbol: 'plus'
(function(symbolName){})("plus");
//Edge symbol end:'plus'

//=========================================================

//Edge symbol: 'Timer'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.$("countdown").html("9");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.$("countdown").html("8");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.$("countdown").html("7");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.$("countdown").html("6");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("countdown").html("5");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.$("countdown").html("4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.$("countdown").html("3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.$("countdown").html("2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.$("countdown").html("1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.$("countdown").html("0");sym.getParentSymbol().stop("a1t");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("countdown").html("10");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",69,function(sym,e){console.log("timer running");});
//Edge binding end
})("Timer");
//Edge symbol end:'Timer'

//=========================================================

//Edge symbol: 'question'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1024,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2040,function(sym,e){sym.stop();});
//Edge binding end
})("question");
//Edge symbol end:'question'

//=========================================================

//Edge symbol: 'feedbackground'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2053,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("feedbackground");
//Edge symbol end:'feedbackground'

//=========================================================

//Edge symbol: 'electron'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("Electron").stop(0000);sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1044,function(sym,e){sym.getSymbol("Electron").stop("happy");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getSymbol("Electron").stop("sad");});
//Edge binding end
})("electron");
//Edge symbol end:'electron'

//=========================================================

//Edge symbol: 'Electron'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("Electron");
//Edge symbol end:'Electron'

//=========================================================

//Edge symbol: 'startbutton_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){});
//Edge binding end
})("begin");
//Edge symbol end:'begin'

//=========================================================

//Edge symbol: 'begin_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){});
//Edge binding end
})("next");
//Edge symbol end:'next'

//=========================================================

//Edge symbol: 'next_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){});
//Edge binding end
})("start");
//Edge symbol end:'start'

//=========================================================

//Edge symbol: 'smile'
(function(symbolName){})("smile");
//Edge symbol end:'smile'

//=========================================================

//Edge symbol: 'wire'
(function(symbolName){})("wire");
//Edge symbol end:'wire'

//=========================================================

//Edge symbol: 'tube'
(function(symbolName){})("tube");
//Edge symbol end:'tube'

//=========================================================

//Edge symbol: 'newElectron'
(function(symbolName){})("newElectron");
//Edge symbol end:'newElectron'

//=========================================================

//Edge symbol: 'claw'
(function(symbolName){})("claw");
//Edge symbol end:'claw'

//=========================================================

//Edge symbol: 'electAni'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){console.log("end of animation");sym.getComposition().getStage().$("Feedbackground").stop("correct");sym.getComposition().getStage().$("Feedbackground").show();sym.getComposition().getStage().$("Feedback").show();sym.getComposition().getStage().$("Next_btn").show();if(totalq>8){console.log(">8");sym.getComposition().getStage().$("questans").html(cornumber);}
if(cornumber==8){sym.getComposition().getStage().$("applause")[0].play();sym.getComposition().getStage().$("Next_btn").hide();}else{sym.getComposition().getStage().$("success1")[0].play();}
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){console.log("end of animation");sym.getComposition().getStage().$("failure1")[0].play();sym.getComposition().getStage().$("Feedbackground").stop("wrong");sym.getComposition().getStage().$("Feedbackground").show();sym.getComposition().getStage().$("Feedback").show();sym.getComposition().getStage().$("Next_btn").show();if(totalq>8){console.log(">8");sym.getComposition().getStage().$("questans").html(cornumber);}
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2562,function(sym,e){});
//Edge binding end
})("electAni");
//Edge symbol end:'electAni'

//=========================================================

//Edge symbol: 'tube2'
(function(symbolName){})("tube2");
//Edge symbol end:'tube2'
})(jQuery,AdobeEdge,"EDGE-111851780");
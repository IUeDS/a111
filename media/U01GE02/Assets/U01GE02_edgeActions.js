/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 180000, function(sym, e) {
         sym.getSymbol("electrons").stop("open");
         sym.getSymbol("tube").stop("3");
         sym.getSymbol("electrons").show();
         console.log("3");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         sym.getSymbol("electrons").stop("closed");
         sym.getSymbol("electrons").show();
         sym.getSymbol("tube").stop("2");
         console.log("2");
         
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         random=function()
         {
         	//console.log("function running");
         	qArray = new Array();
         	 var qHashObject = new Object();
         
         	 for (var i=0; i < 4; i++) {
         		 qHashObject[i.toString()] = 0;
         	 }
         	 while (qArray.length < 4){
         		var randNum = Math.floor(Math.random() * 100) % 4;
         		if (qHashObject[randNum.toString()] < 1) {
         			 qHashObject[randNum.toString()] += 1;
         			 qArray.push(randNum+1);
         			 //console.log("randNum =  " + randNum);
         		 }
         		 else {
         			 continue;
         		 }
         	}
         	//console.log("qArray =  " + qArray);
         
         }
         sym.$("ans_cw_btn").hide();
         sym.$("ans_cw_gr").show();
         sym.$("ans_ccw_btn").hide();
         sym.$("ans_ccw_gr").show();
         sym.$("ans_no_btn").hide();
         sym.$("ans_no_gr").show();
         sym.$("next_btn").hide();
         sym.$("glow").hide();
         
         complete=false;
         phase=1;
         qnum=0;
         random();
         stage=qArray[qnum];
         //console.log("stage = "+stage)
         //totalq=0;
         cornumber=0;
         sym.$("questans").html(cornumber);
         
         
         
         
         
         
         
         //sym.setVariable("cw", false);
         
         
         timer_press=function(){
         	//console.log("timer_press running");
         	sym.$("feedback").html("Time's up!");// insert code here
         	sym.$("questans").html("0");
         	// Play the audio track.
         	sym.$("failure1")[0].play();
         	sym.$("ans_cw_btn").hide();
         	sym.$("ans_cw_gr").stop(0000);
         	sym.$("ans_cw_gr").show();
         	sym.$("ans_ccw_btn").hide();
         	sym.$("ans_ccw_gr").stop(0000);
         	sym.$("ans_ccw_gr").show();
         	sym.$("ans_no_btn").hide();
         	sym.$("ans_no_gr").stop(0000);
         	sym.$("ans_no_gr").show();
         	sym.$("next_btn").hide();
         	sym.$("glow").hide();
         
         	cornumber=0;
         
         	sym.$("next_btn").show();
         
         }
         
         next_press=function(){
         	//console.log("next press running");
         	cw=false;	
         	ccw=false;
         	no=false;
         	if (qnum==4){
         	random();
         	qnum=0;
         	}
         	if (cornumber==0){
         	sym.$("questans").html(cornumber);
         	}
         	if (phase==1){
         	sym.$("phasetxt").html("Phase 1");
         	sym.$("instructions").html("Answer eight consecutively correct to continue to Phase 2.");
         	}else if (phase==2){
         	sym.$("phasetxt").html("Phase 2");
         	sym.$("instructions").html("Answer eight consecutively correct to continue to Phase 3.");
         	}else if (phase==3){
         	sym.$("phasetxt").html("Phase 3");
         	sym.$("instructions").html("Answer eight consecutively correct to continue to Phase 4.");
         	}else if (phase==4){
         	sym.$("phasetxt").html("Phase 4");
         	sym.$("instructions").html("Answer eight consecutively correct to finish game.");
         	}
         	pstage=stage;
         	stage=qArray[qnum];
         	//console.log("stage = "+stage);
         	//console.log("pstage = "+pstage);
         	if (stage==1){
         		ccw=true;
         	}else if (stage==2){
         		cw=true;
         	}else {
         		no=true;
         	}
         	//console.log("cw = "+cw);
         	//console.log("ccw = "+ccw);
         	//console.log("no = "+no);
         	sym.$("begin").hide();
         	sym.$("next_btn").hide();
         	sym.$("ans_cw_btn").stop(0000);
         	sym.$("ans_cw_btn").show();
         	sym.$("ans_cw_gr").hide();
         	sym.getSymbol("ans_cw_gr").stop(0000);
         	sym.$("ans_ccw_btn").stop(0000);
         	sym.$("ans_ccw_btn").show();
         	sym.$("ans_ccw_gr").hide();
         	sym.getSymbol("ans_ccw_gr").stop(0000);
         	sym.$("ans_no_btn").stop(0000);
         	sym.$("ans_no_btn").show();
         	sym.$("ans_no_gr").hide();
         	sym.getSymbol("ans_no_gr").stop(0000);
         	sym.$("glow").show();
         	sym.getSymbol("glow").play(0000);
         	sym.$("feedback").html("");
         	sym.getSymbol("Timer").play(0000)
         	if (phase==4){
         			sym.getSymbol("bulb").stop("smalloff");
         		}else{
         			sym.getSymbol("bulb").stop("bigoff");
         		}
         	//console.log("134");
         	if ((pstage==1)||(pstage==2)){
         		//console.log("play clear");
         		sym.getSymbol("electrons").play("clear");
         	}
         	//sym.getSymbol("electrons").play("clear");
         	if (stage<3) {
         		//console.log("137");
         		sym.getSymbol("electrons").stop("closed");
         	}else {
         		//console.log("140");
         		sym.getSymbol("electrons").stop("open");
         	}
         	if (phase==4){
         		sym.$("electrons").hide();
         	}
         	if ((phase==1)&&(stage==1)){
         		sym.getSymbol("tube").stop("p1s1");
         		sym.getSymbol("battery").stop("p1s1");
         
         	}else if ((phase==1)&&(stage==2)){
         		sym.getSymbol("tube").stop("p1s2");
         		sym.getSymbol("battery").stop("p1s2");
         
         	}else if ((phase==1)&&(stage==3)){
         		sym.getSymbol("tube").stop("p1s3");
         		sym.getSymbol("battery").stop("p1s3");
         
         	}else if ((phase==1)&&(stage==4)){
         		sym.getSymbol("tube").stop("p1s4");
         		sym.getSymbol("battery").stop("p1s4");
         
         	}else if ((phase==2)&&(stage==1)){
         		sym.getSymbol("tube").stop("p2s1");
         		sym.getSymbol("battery").stop("p2s1");
         
         	}else if ((phase==2)&&(stage==2)){
         		sym.getSymbol("tube").stop("p2s2");
         		sym.getSymbol("battery").stop("p2s2");
         
         	}else if ((phase==2)&&(stage==3)){
         		sym.getSymbol("tube").stop("p2s3");
         		sym.getSymbol("battery").stop("p2s3");
         
         	}else if ((phase==2)&&(stage==4)){
         		sym.getSymbol("tube").stop("p2s4");
         		sym.getSymbol("battery").stop("p2s4");
         
         	}else if ((phase==3)&&(stage==1)){
         		sym.getSymbol("tube").stop("p3s1");
         		sym.getSymbol("battery").stop("p3s1");
         
         	}else if ((phase==3)&&(stage==2)){
         		sym.getSymbol("tube").stop("p3s2");
         		sym.getSymbol("battery").stop("p3s2");
         
         	}else if ((phase==3)&&(stage==3)){
         		sym.getSymbol("tube").stop("p3s3");
         		sym.getSymbol("battery").stop("p3s3");
         
         	}else if ((phase==3)&&(stage==4)){
         		sym.getSymbol("tube").stop("p3s4");
         		sym.getSymbol("battery").stop("p3s4");
         
         	}else if ((phase==4)&&(stage==1)){
         		//console.log("phase 4 tube?");
         		sym.getSymbol("tube").stop("p4s1");
         		sym.getSymbol("battery").stop("p4s1");
         
         	}else if ((phase==4)&&(stage==2)){
         		//console.log("phase 4 tube?");
         		sym.getSymbol("tube").stop("p4s2");
         		sym.getSymbol("battery").stop("p4s2");
         
         	}else if ((phase==4)&&(stage==3)){
         		//console.log("phase 4 tube?");
         		sym.getSymbol("tube").stop("p4s3");
         		sym.getSymbol("battery").stop("p4s3");
         
         	}else if ((phase==4)&&(stage==4)){
         		//console.log("phase 4 tube?");
         		sym.getSymbol("tube").stop("p4s4");
         		sym.getSymbol("battery").stop("p4s4");
         
         	}
         
         
         
         }
         
         cw_press=function(){
         	//qnum++;
         	//console.log("cw_press running");
         	sym.getSymbol("Timer").stop();
         	sym.$("ans_cw_btn").hide();
         	sym.$("ans_ccw_btn").hide();
         	sym.$("ans_no_btn").hide();
         	
         	sym.$("glow").hide();
         	sym.getSymbol("glow").stop();
         
         	sym.$("ans_cw_gr").show();
         
         	sym.$("ans_ccw_gr").show();
         	sym.getSymbol("ans_ccw_gr").stop("up");
         	sym.$("ans_no_gr").show();
         	sym.getSymbol("ans_no_gr").stop("up");
         	if (cw==false){
         		sym.getSymbol("ans_cw_gr").stop("no");
         		sym.$("failure1")[0].play();
         		cornumber=0;
         		sym.$("failure1")[0].play();
         		sym.$("questans").html(cornumber);
         		if (no==true){
         			sym.$("feedback").html("The circuit is not closed.");
         		}else {
         			sym.$("feedback").html("That's the wrong direction.");
         		}
         
         	}else if (cw==true){
         		sym.getSymbol("ans_cw_gr").stop("yes");
         		if (phase==4){
         			sym.getSymbol("bulb").stop("smallon");
         		}else{
         			sym.getSymbol("bulb").stop("bigon");
         		}
         		if (phase!=4){
         			//console.log("phase not = 4");
         			sym.getSymbol("electrons").play("clock");
         		}
         
         		cornumber++;
         		sym.$("questans").html(cornumber);
         		sym.$("success1")[0].play();
         		if (cornumber==8){
         			if (phase==4){
         				complete=true;
         				console.log("complete");
         				sym.$("applause")[0].play();
         				sym.$("feedback").html("Congratulations! You've completed all four phases.");
         			}else {
         				//console.log("on to next phase");
         				cornumber =0;
         				phase++;
         				//console.log("phase= "+phase);
         				sym.$("feedback").html("Well done! On to the next phase.");
         
         			}
         		}else{
         		sym.$("feedback").html("Correct");
         		}
         	}
         qnum++;
         	if (complete != true){
         	sym.$("next_btn").show();
         	}
         
         
         }
         
         ccw_press=function(){
         	//console.log("ccw_press running");
         	//qnum++;
         	sym.getSymbol("Timer").stop();
         	sym.$("ans_cw_btn").hide();
         	sym.$("ans_ccw_btn").hide();
         	sym.$("ans_no_btn").hide();
         	
         	sym.$("glow").hide();
         	sym.getSymbol("glow").stop();
         	sym.$("ans_cw_gr").show();
         	sym.getSymbol("ans_cw_gr").stop("up");
         	sym.$("ans_ccw_gr").show();
         
         	sym.$("ans_no_gr").show();
         	sym.getSymbol("ans_no_gr").stop("up");
         	if (ccw==false){
         		sym.getSymbol("ans_ccw_gr").stop("no");
         		cornumber=0;
         		sym.$("failure1")[0].play();
         		sym.$("questans").html(cornumber);
         		if (no==true){
         			sym.$("feedback").html("The circuit is not closed.");
         		}else {
         			sym.$("feedback").html("That's the wrong direction.");
         		}
         
         	}else if (ccw==true){
         		sym.getSymbol("ans_ccw_gr").stop("yes");
         		if (phase==4){
         			sym.getSymbol("bulb").stop("smallon");
         		}else{
         			sym.getSymbol("bulb").stop("bigon");
         		}
         		if (phase!=4){
         			console.log("phase not = 4");
         			sym.getSymbol("electrons").play("counter");
         		}
         
         		cornumber++;
         		sym.$("questans").html(cornumber);
         		sym.$("success1")[0].play();
         		if (cornumber==8){
         			if (phase==4){
         				complete=true;
         				//console.log("complete");
         				sym.$("applause")[0].play();
         				sym.$("feedback").html("Congratulations! You've completed all four phases.");
         			}else {
         				//console.log("on to next phase");
         				cornumber =0;
         				phase++;
         				//console.log("phase= "+phase);
         				sym.$("feedback").html("Well done! On to the next phase.");
         				sym.$("next_btn").show();
         			}
         		}else{
         		sym.$("feedback").html("Correct");
         		}
         	}
         qnum++;
         	if (complete != true){
         	sym.$("next_btn").show();
         	}
         
         }
         
         no_press=function(){
         	//console.log("no_press running");
         	//qnum++;
         	sym.getSymbol("Timer").stop();
         	sym.$("ans_cw_btn").hide();
         	sym.$("ans_ccw_btn").hide();
         	sym.$("ans_no_btn").hide();
         	sym.$("glow").hide();
         	sym.getSymbol("glow").stop();
         	sym.$("ans_cw_gr").show();
         	sym.getSymbol("ans_cw_gr").stop("up");
         	sym.$("ans_ccw_gr").show();
         	sym.getSymbol("ans_ccw_gr").stop("up");
         	sym.$("ans_no_gr").show();
         
         	if (no==false){
         		sym.getSymbol("ans_no_gr").stop("no");
         		cornumber=0;
         		sym.$("failure1")[0].play();
         		sym.$("questans").html(cornumber);
         		sym.$("feedback").html("The circuit is closed.");
         		//if (no==true){
         			//sym.$("feedback").html("The circuit is not closed.");
         		//}else {
         			//sym.$("feedback").html("That's the wrong direction.");
         		//}
         
         	}else if (no==true){
         		sym.getSymbol("ans_no_gr").stop("yes");
         		if (phase==4){
         			sym.getSymbol("bulb").stop("smalloff");
         		}else{
         			sym.getSymbol("bulb").stop("bigoff");
         		}
         		if (phase!=4){
         			//console.log("phase not = 4");
         			//sym.getSymbol("electrons").play("counter");
         		}
         
         		cornumber++;
         		sym.$("questans").html(cornumber);
         		sym.$("success1")[0].play();
         		if (cornumber==8){
         			if (phase==4){
         				complete=true;
         				//console.log("complete");
         				sym.$("applause")[0].play();
         				sym.$("feedback").html("Congratulations! You've completed all four phases.");
         			}else {
         				//console.log("on to next phase");
         				cornumber =0;
         				phase++;
         				//console.log("phase= "+phase);
         				sym.$("feedback").html("Well done! On to the next phase.");
         				sym.$("next_btn").show();
         			}
         		}else{
         		sym.$("feedback").html("Correct");
         		}
         	}
         qnum++;
         	if (complete != true){
         	sym.$("next_btn").show();
         	}
         }
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         //sym.getSymbol("electrons").play("clock");
         
         
         sym.getSymbol("tube").stop("1");
         //console.log("1");
         
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         //sym.stop(1000);
         
         
         
         
         
         
         //sym.getSymbol("electrons").play("counter");
         //sym.getSymbol("bulb").stop("bigon");
         sym.stop();
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 240000, function(sym, e) {
         sym.getSymbol("tube").stop("4");
         sym.getSymbol("electrons").hide();
         //sym.getSymbol("tube").stop("3");
         console.log("4");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_cw_btn}", "mouseout", function(sym, e) {
         sym.getSymbol("ans_cw_btn").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_cw_btn}", "mouseover", function(sym, e) {
         sym.getSymbol("ans_cw_btn").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_cw_btn}", "mousedown", function(sym, e) {
         cw_press();
         sym.$("buttonclick")[0].play();
         //sym.$("ans_cw_btn").hide();
         //sym.$("ans_ccw_btn").hide();
         //sym.$("ans_no_btn").hide();
         //sym.$("ans_cw_gr").show();
         //sym.$("ans_cw_gr").stop("no");
         //sym.$("ans_ccw_gr").show();
         //sym.$("ans_ccw_gr").stop("down");
         //sym.$("ans_no_gr").show();
         //sym.$("ans_no_gr").stop("down");
         
         
         // Play the audio track.
         //sym.$("buttonclick")[0].play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_no_btn}", "mouseout", function(sym, e) {
         sym.getSymbol("ans_no_btn").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_no_btn}", "mouseover", function(sym, e) {
         sym.getSymbol("ans_no_btn").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_no_btn}", "mousedown", function(sym, e) {
         no_press();
         sym.$("buttonclick")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_ccw_btn}", "mouseout", function(sym, e) {
         sym.getSymbol("ans_ccw_btn").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_ccw_btn}", "mouseover", function(sym, e) {
         sym.getSymbol("ans_ccw_btn").stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ans_ccw_btn}", "mousedown", function(sym, e) {
         ccw_press();
         sym.$("buttonclick")[0].play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_begin}", "mouseover", function(sym, e) {
         sym.getSymbol("begin").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_begin}", "mouseout", function(sym, e) {
         sym.getSymbol("begin").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_begin}", "mousedown", function(sym, e) {
         sym.$("buttonclick")[0].play();
         next_press();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_btn}", "mouseover", function(sym, e) {
         sym.getSymbol("next_btn").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_btn}", "mouseout", function(sym, e) {
         sym.getSymbol("next_btn").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_btn}", "mousedown", function(sym, e) {
         sym.getSymbol("next_btn").stop("down");
         sym.$("buttonclick")[0].play();
         next_press();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Timer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("countdown").html("10");
         
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69, function(sym, e) {
         //console.log("timer running");// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$("countdown").html("9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.$("countdown").html("8");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.$("countdown").html("7");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.$("countdown").html("6");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.$("countdown").html("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.$("countdown").html("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.$("countdown").html("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.$("countdown").html("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.$("countdown").html("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.$("countdown").html("0");
         timer_press();
         //
         //sym.getParentSymbol().timer_press();
         //sym.getParentSymbol().stop("a1t");
         
         //sym.getComposition().getStage().getSymbol("Feedbackground").stop("incorrect");
         
         //sym.getComposition().getStage().sym.$("Feedback").html("Time's up!");
         //parent.sym.$("Feedback").html("Time's up!");
         
         //parent.sym.getSymbol("Feedbackground").stop("incorrect");
         
         //parent.stop("answer");
         
         sym.stop();

      });
      //Edge binding end

   })("Timer");
   //Edge symbol end:'Timer'

   //=========================================================
   
   //Edge symbol: 'circuit'
   (function(symbolName) {   
   
   })("circuit");
   //Edge symbol end:'circuit'

   //=========================================================
   
   //Edge symbol: 'phase1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("phase1");
   //Edge symbol end:'phase1'

   //=========================================================
   
   //Edge symbol: 'phase1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("phase2");
   //Edge symbol end:'phase2'

   //=========================================================
   
   //Edge symbol: 'phase2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("phase3");
   //Edge symbol end:'phase3'

   //=========================================================
   
   //Edge symbol: 'phase3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("phase4");
   //Edge symbol end:'phase4'

   //=========================================================
   
   //Edge symbol: 'phase11'
   (function(symbolName) {   
   
   })("phase11");
   //Edge symbol end:'phase11'

   //=========================================================
   
   //Edge symbol: 'phase22'
   (function(symbolName) {   
   
   })("phase22");
   //Edge symbol end:'phase22'

   //=========================================================
   
   //Edge symbol: 'phase33'
   (function(symbolName) {   
   
   })("phase33");
   //Edge symbol end:'phase33'

   //=========================================================
   
   //Edge symbol: 'phase44'
   (function(symbolName) {   
   
   })("phase44");
   //Edge symbol end:'phase44'

   //=========================================================
   
   //Edge symbol: 'electron'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("electron");
   //Edge symbol end:'electron'

   //=========================================================
   
   //Edge symbol: 'electrons'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //var electrons3 = new Array(elect01,elect02,elect03,elect04,elect05,elect06,elect07,elect08,elect09,elect10,elect11,elect12,elect13,elect14,elect15,elect16,elect17,elect18,elect19,elect20,elect21,elect22,elect23,elect24,elect25,elect26,elect27,elect28,elect29,elect30,elect31,elect32,elect33,elect34,elect35,elect36);
         //sym.setVariable("k", 0);
         //console.log("electrons array=  "+electrons3)
         //console.log("k= "+k)
         sym.getSymbol(target).stop ("plain");
         //for (i=0; i<electrons2.length;i++){
         //console.log("plain");
         //target=electrons2[i];
         //sym.getSymbol(target).stop ("plain");
         //}
         //console.log("previous= "+previous)
         //if (previous==true){
         	//console.log("previous")
         	//sym.getSymbol(target).stop ("plain");
         //}
         sym.stop();
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         ccw_ani();
         //console.log("turn");
         sym.play("loop1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         //console.log("open ")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         //console.log("counter");
         var electrons2 = new Array("elect01","elect02","elect03","elect04","elect05","elect06","elect07","elect08","elect09","elect10","elect11","elect12","elect13","elect14","elect15","elect16","elect17","elect18","elect19","elect20","elect21","elect22","elect23","elect24","elect25","elect26","elect27","elect28","elect29","elect30","elect31","elect32","elect33","elect34","elect35","elect36");
         //sym.setVariable("k", 7);
         k=7;
         //console.log("4");
         //console.log("k= "+k);
         //console.log(electrons2[k])
         //qvalue = qArray[qnum.toString()];
         target=electrons2[k];
         //sym.setVariable("target");
         //console.log("8")
         sym.getSymbol(target).stop ("smile");
         
         ccw_ani=function(){
         	//console.log("ccw_ani running");
         	previous=true;
         	sym.getSymbol(target).stop ("plain");
         	//console.log("target = "+target);
         	k++;
         	if (k>35){
         	k=0;
         	}
         	//console.log("k= "+k)
         	target=electrons2[k];
         	//console.log("target = "+target);
         	sym.getSymbol(target).stop ("smile");
         
         } 
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
         //console.log("loop1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         //console.log("clock");
         var electrons2 = new Array("elect01","elect02","elect03","elect04","elect05","elect06","elect07","elect08","elect09","elect10","elect11","elect12","elect13","elect14","elect15","elect16","elect17","elect18","elect19","elect20","elect21","elect22","elect23","elect24","elect25","elect26","elect27","elect28","elect29","elect30","elect31","elect32","elect33","elect34","elect35","elect36");
         //sym.setVariable("k", 7);
         
         
         k=7;
         
         target=electrons2[k];
         //sym.setVariable("target");
         //console.log("8")
         sym.getSymbol(target).stop ("smile");
         
         cw_ani=function(){
         	previous=true;
         	//console.log("cw_ani running");
         	sym.getSymbol(target).stop ("plain");
         	//console.log("target = "+target);
         	k--;
         	if (k<0){
         	k=35;
         	}
         	//console.log("k= "+k)
         	target=electrons2[k];
         	//console.log("target = "+target);
         	sym.getSymbol(target).stop ("smile");
         
         } 
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15250, function(sym, e) {
         //console.log("loop2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15643, function(sym, e) {
         cw_ani();
         //console.log("turn");
         sym.play("loop2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         //console.log("target = "+target);
         
         sym.getSymbol(target).stop ("plain");
         
         //sym.stop("closed");
         

      });
      //Edge binding end

   })("electrons");
   //Edge symbol end:'electrons'

   //=========================================================
   
   //Edge symbol: 'ans_cw_gr'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ans_cw_gr");
   //Edge symbol end:'ans_cw_gr'

   //=========================================================
   
   //Edge symbol: 'ans_cw_gr_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ans_no_gr");
   //Edge symbol end:'ans_no_gr'

   //=========================================================
   
   //Edge symbol: 'ans_cw_gr_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ans_ccw_gr");
   //Edge symbol end:'ans_ccw_gr'

   //=========================================================
   
   //Edge symbol: 'ans_cw_btn'
   (function(symbolName) {   
   
   })("ans_cw_btn");
   //Edge symbol end:'ans_cw_btn'

   //=========================================================
   
   //Edge symbol: 'ans_no_btn'
   (function(symbolName) {   
   
   })("ans_no_btn");
   //Edge symbol end:'ans_no_btn'

   //=========================================================
   
   //Edge symbol: 'ans_ccw_btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ans_ccw_btn");
   //Edge symbol end:'ans_ccw_btn'

   //=========================================================
   
   //Edge symbol: 'electron_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("electron_1");
   //Edge symbol end:'electron_1'

   //=========================================================
   
   //Edge symbol: 'tube'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("tube");
   //Edge symbol end:'tube'

   //=========================================================
   
   //Edge symbol: 'battery'
   (function(symbolName) {   
   
   })("battery");
   //Edge symbol end:'battery'

   //=========================================================
   
   //Edge symbol: 'bulb'
   (function(symbolName) {   
   
   })("bulb");
   //Edge symbol end:'bulb'

   //=========================================================
   
   //Edge symbol: 'next'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("next");
   //Edge symbol end:'next'

   //=========================================================
   
   //Edge symbol: 'begin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("begin");
   //Edge symbol end:'begin'

   //=========================================================
   
   //Edge symbol: 'glow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("glow");
   //Edge symbol end:'glow'

})(jQuery, AdobeEdge, "EDGE-153592568");
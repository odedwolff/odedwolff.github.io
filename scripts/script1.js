
function go(){
	console.log("go");
	//h1.style("rotateY:30deg")
	rotateAnimate(0, 180, 50, 100);

}


function init(){
	// console.log("welcome");
	// var div = document.getElementById("div1");
	// setTimeout(function(){div.style="background:yellow";},1000)
	//test1();

	// testBreakDown();
}


function rotateAnimate(startEngle, endEngle, frameRate, degPerSec){
	var totalFrames = Math.abs(endEngle - startEngle) / degPerSec * frameRate;
	var degPerFrame = (endEngle - startEngle) / totalFrames;
	var cnt = 0;
	
	var rotTo = startEngle;
	var timer = setInterval(
		function(){
			divRot.style = "transform: rotate(" + rotTo + "deg)";
			rotTo+=degPerFrame;
			cnt +=1;
			if(cnt == totalFrames){
				clearInterval(timer);
			}
		}, 
	1/frameRate);
}



function goCssRot(){
	//divRotCss.classList.add("cssRotGo");
	elms = document.getElementsByClassName("wischer");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("wischerRun");	
	}
}

function stopRotate(){
	elms = document.getElementsByClassName("wischer");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("wischerRun");	
	}
}

function startSwinging(){

	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.add("swinging");	
	}
}


function startSwingingAynch(periodLenSec){
	
	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		var delay = Math.random() * periodLenSec * 1000;
		console.log("delat=" + delay);
		setTimeout(
			(function(elm){
				elm.classList.add("swinging");	
			}).bind(null, elms[i])
			,delay);
	}
}

function startSwingingDelta(dPhaseSec){
	
	elms = document.getElementsByClassName("swingable");
	for(var i = 0 ; i< elms.length ; i++){
		//console.log("delat=" + delay);
		setTimeout(
			(function(elm){
				elm.classList.add("swinging");	
			}).bind(null, elms[i])
			,dPhaseSec * 1000 * i);
	}
}

function startTwister(dPhaseSec, defuseSec){
	elms = document.getElementsByClassName("twistLetterCont");
		for(var i = 0 ; i< elms.length ; i++){
			//console.log("delat=" + delay);
			setTimeout(
				(function(elm){
					elm.classList.add("twisting_in");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);
			
			// setTimeout(function(elm){elm.classList.remove("twisting_in")}.bind(null, elms[i]),
			//  (dPhaseSec * 1000 * i) + (defuseSec * 1000));
	}
	
}

function reloadTwister(){
	elms = document.getElementsByClassName("twistLetterCont");
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove("twisting_in");
		elms[i].classList.remove("twist_pre_ride");	
		elms[i].classList.remove("twist_ride_away");	

	}
}

function twisterStage3(dPhaseSec, idleSpinSec){
	elms = document.getElementsByClassName("twistLetterCont");
		for(var i = 0 ; i< elms.length ; i++){
			//console.log("delat=" + delay);
			setTimeout(
				(function(elm){
					elm.classList.remove("twist");	
					elm.classList.add("twist_pre_ride");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);
			
			setTimeout(function(elm){
				elm.classList.remove("twist_pre_ride");
				elm.classList.add("twist_ride_away")
			}.bind(null, elms[i]),
			(dPhaseSec * 1000 * i) + (idleSpinSec * 1000));
	}	

}

function twistIntegrated(){
	 
	 startTwister(.75, null);
	 setTimeout(function(){
	 	twisterStage3(.7, .7);
	 }
	 	,6000);
}


function startPulsar(dPhaseSec){
	elms = document.getElementsByClassName("letterContainerPulsar");
		for(var i = 0 ; i< elms.length ; i++){
			setTimeout(
				(function(elm){
					elm.classList.add("pulsarPumping");	
				}).bind(null, elms[i])
				,dPhaseSec * 1000 * i);		
	}
}


function stopPulsar(){
	elms = document.getElementsByClassName("letterContainerPulsar");
		for(var i = 0 ; i< elms.length ; i++){
					elms[i].classList.remove("pulsarPumping");			
		}
}

function rollWord(){
	document.getElementById("divRollerWord").classList.add("rolling");		 
}

function rollPhase2(){
	document.getElementById("divRollerWord").classList.add("rollingPhase2");		 
}

function resetRollWord(){
	document.getElementById("divRollerWord").classList.remove("rolling");
	document.getElementById("divRollerWord").classList.remove("rollingPhase2");
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2");	
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1reverse");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2reverse");	 
	document.getElementById("divRollerWord").classList.remove("rollerFadeOut");
	document.getElementById("divRollerWordDouble").classList.remove("fakeRollerFadeIn");
}

function integratedRoll(){
	rollWord();
	setTimeout(function(){rollPhase2();}, 13500);
}


function transformIn(){
	document.getElementById("divContRollerR1").classList.add("clsTranformInR1");		 
	document.getElementById("divContRollerR2").classList.add("clsTranformInR2");		 
}

function transformOut(){
	document.getElementById("divContRollerR1").classList.remove("clsTranformInR1");
	document.getElementById("divContRollerR2").classList.remove("clsTranformInR2");		
	document.getElementById("divContRollerR1").classList.add("clsTranformInR1reverse");
	document.getElementById("divContRollerR2").classList.add("clsTranformInR2reverse");		 
}


function transmitRoller(){
	document.getElementById("divRollerWord").classList.remove("rolling");
	document.getElementById("divRollerWord").classList.add("rollerFadeOut");
	document.getElementById("divRollerWordDouble").classList.add("fakeRollerFadeIn");

}

function rollerLoop(){
	(function loop(){
		resetRollWord();
		setTimeout(transformIn,1000);
		setTimeout(rollWord, 3000);
		setTimeout(transformOut, 15000);
		setTimeout(transmitRoller, 17000);
		setTimeout(loop, 18000);
	})();	
}

function animFocus(){
	document.getElementById("divLinesFocusText").classList.add("focusAnim");
}

function clearFocusAnim(){
		document.getElementById("divLinesFocusText").classList.remove("focusAnim");

}


function breakDownTextToLtters(text, classToAdd){
	out="";
	var c;
	var newElm;
	for (var i = 0;i<text.length;i++){
		c=text[i];
		if(c==" "){
			c= "&nbsp";
		}	
		newElm = "<div class=" +classToAdd +">" + c+ "</div>\n";
		out+=newElm;
	}
	return out;

}


//the containing element is assumed to contain the prargrpah 
// to be processed, as only child element 
function replaceParagpheWithSplittedDives(containingElment){
	p=containingElment.firstElementChild;
	var text=p.innerHTML;
	var processedText=breakDownTextToLtters(text, "classFlashLetter");
	newDomContent="<div id='divProcessedP'>\n" +  processedText + "\n</div>"
	containingElment.innerHTML=newDomContent;
	console.log(text);
}


function preProcessFlashing(){	
	replaceParagpheWithSplittedDives(document.getElementById("divFashingContent"));
}

function startFlashing(){
 	addClsToClsMmbrs("classFlashLetter", "flashing10", 2000);
}


function addClsToClsMmbrs(clsSelect, clsAdd, rndTimingSpectrumMs){
	elms = document.getElementsByClassName(clsSelect);
	var hasRndTiming= rndTimingSpectrumMs != null && rndTimingSpectrumMs != 0;
	for(var i = 0 ; i< elms.length ; i++){
		var delay;
		if(hasRndTiming){
			delay= rndTimingSpectrumMs * Math.random();
		}else{
			delay=100;
		}
		setTimeout(function(elm){
			elm.classList.add(clsAdd);
		}.bind(null, elms[i]), delay);		
	}
}


//assign sequence to individual letters
function setSequencesToFlasingLetter(rndTimingSpectrumMs){
	elms = document.getElementsByClassName("classFlashLetter");
	var hasRndTiming= rndTimingSpectrumMs != null && rndTimingSpectrumMs != 0;
	for(var i = 0 ; i< elms.length ; i++){
		var delay= rndTimingSpectrumMs * Math.random();
		setTimeout(function(elm){
			setTimeout(function(){
				elm.classList.add("flashing10")
			},0);
			setTimeout(function(){
				elm.classList.add("flashing10");
				elm.classList.add("flashing20")
			},5000);
			setTimeout(function(){
				elm.classList.add("flashing20");
				elm.classList.add("flashing40")
			},10000);
			setTimeout(function(){
				elm.classList.add("flashing10");
				elm.classList.add("flashing80")
			},15000);
		}.bind(null, elms[i]), delay);		
	}
}



function clearFlashing(toTranspaerent){

	var flashingChildren = document.getElementById("divProcessedP").children;
	for (var i = 0; i<flashingChildren.length; i++){
		if(toTranspaerent){
			flashingChildren[i].classList= "classFlashLetterTransparent";
		}else{
			flashingChildren[i].classList= "classFlashLetter";
		}
	}

	var elm = document.getElementById("divProcessedP");
	if (elm){
		elm.classList.remove("snychFlash1");	
	}
}


function removeClassFromClass(clsSelect, clsRmv){
	elms = document.getElementsByClassName(clsSelect);
	for(var i = 0 ; i< elms.length ; i++){
		elms[i].classList.remove(clsRmv);
	}
}

function flashSync(){
	document.getElementById("divProcessedP").classList.add("snychFlash1");
}


function flashingSequence(){
	setSequencesToFlasingLetter(2000);


	// setTimeout(function(){
	// 	clearFlashing(true);
	// 	addClsToClsMmbrs("classFlashLetter", "flashing10", 2000);}
	// 	, 0 );

	// setTimeout(function(){
	// 	clearFlashing(true);
	// 	addClsToClsMmbrs("classFlashLetter", "flashing20", 2000);}
	// 	, 5000 );

	// setTimeout(function(){
	// 	clearFlashing(true);
	// 	addClsToClsMmbrs("classFlashLetter", "flashing40", 2000);}
	// 	, 10000 );

	// setTimeout(function(){
	// 	clearFlashing(true);
	// 	addClsToClsMmbrs("classFlashLetter", "flashing80", 2000);}
	// 	, 15000 );
	
}











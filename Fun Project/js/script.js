function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerHTML=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num) {
	if (nun="") {
		document.getElementById("output-value").innerText=getFormattedNumber(nun);
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
}
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(nun) {
	// body...
	 return Number(nun.replace(/,/g,''));

}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click',function(){
  	if (this+id=="clear"){
  		printHistory("");
  		printOutput("");
  	}
  else	if(this.id=="backspace") {
  		var 
  		output=reverseNumberFormat(getOutput()).toString();
  		if (output) {
  			output= output.substr(0,output.length-1);
  			printOutput(output);
  		}
  	}
  	else{
  		var output=getOutput();
  		var history=getHistory();
  		if (output!="") {
  			output=reverseNumberFormat(output);
  			history=history+output;
  			if (this+id="=") {
  				var result=eval(history);
  				printOutput(result);
  				printHistory("");
  			}
  			else{
  				history=history+this.id;
  				printHistory(history);
  				printOutput("");
  			}
  		}
  	}
   
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click',function(){
  	var output=reverseNumberFormat(getOutput());
  	if (output!=NaN) {
  		output=output+this.id;
  		printOutput(output);
  	}
   
  });
}

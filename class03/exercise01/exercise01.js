//Problem 1
function farToCel(farTemp){
	var celTemp = (5/9) * (farTemp - 32);
    var tempAnalysis;
    if(celTemp < 10){
      tempAnalysis = "cold";
    }else if(celTemp >= 10 && celTemp < 25){
      tempAnalysis = "fair";
    }else{
      tempAnalysis = "hot";
    }
	console.log("The current temperature is " + parseInt(celTemp) + " degrees Celsius. It's " + tempAnalysis + " outside");
}

farToCel(-40);

//Problem 2
function sum(numArray){
  var total = 0;
  for(var i = 0; i < numArray.length; i++){
    total += numArray[i];
  }
  console.log(total);
}

sum([10,20,100,2,5]);

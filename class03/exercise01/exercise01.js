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

//Problem 3
function largestNum(numArray){
  var largest = numArray[0];
  for(var i = 1; i < numArray.length; i++){
    if(numArray[i] > largest){
      largest = numArray[i];
    }
  }
  console.log(largest);
}

largestNum([10,20,100,2,5]);

//Problem 4
function charFreq(string){
  var freqMap = {};
  for(var i = 0; i < string.length; i++){
    var key = string.charAt(i);
    freqMap[key] = (freqMap[key] || 0) + 1;
  }
  console.log(freqMap);
}

charFreq("my name is tim");

//Problem 5
function fibonacci(max){
  var prevFib = 0;
  var currFib = 0;
  
  while((currFib + prevFib) <= max){
    if(currFib === 0){
      currFib += 1;
      console.log(currFib);
    }else{
      var temp = prevFib;
      prevFib = currFib;
      currFib = currFib + temp;
      console.log(currFib);
    }
  }
}

fibonacci(25);
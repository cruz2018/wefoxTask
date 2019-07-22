function getRandomNr(highest) {
  return Math.floor(Math.random() * highest);
}

function getNewDistinctNr(list,highest){
  var number = getRandomNr(highest);
  while(list.indexOf(number)>=0){
    number = getRandomNr(highest);
  }
  return number;
}


function generateNumbers(length, highest){
  if(typeof length != "number" || typeof length == "number" && length <= 0 ) {
    throw new Error("Invalid array length input");
  }
  if(typeof highest != "number" || typeof highest == "number" && highest < length - 1 ) {
    throw new Error("Invalid highest number input");
  }
  var list = [];
  while (list.length < length){
    list.push(getNewDistinctNr(list, highest))
  }
  list.sort(function(a,b){return a-b}); // sort numerically
  return list;
}

function printSmallest(list, nth){
  if(typeof nth != "number" || typeof nth == "number" && nth > list.length) {
    throw new Error("Invalid nth position input");
  }
  console.log(list[nth-1]);
}


var list = generateNumbers(500,1000);
console.log(list);
printSmallest(list,10);
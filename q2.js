function checkPs(str){
  
  if(typeof str != "string") {
     throw new Error("Invalid input string");
  }
  
  str = str.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`"'~() ]/g,"");

  if(str.length < 3)
    return false;
  var isPs = true;
  var l = str.length;
  for( var i = 0; i < Math.floor(l / 2) && isPs == true; i++){
    if(str[i] != str[l-1-i]){
      isPs = false;
    }
  }
  return isPs;
}
 
console.log(checkPs("Race Car"));
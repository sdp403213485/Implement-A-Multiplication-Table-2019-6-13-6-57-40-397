
function multiplyTable(start, stop) {
    var output = "";
   var valid = isValid(start,stop);
   if(!valid){
      return valid;
   }
   var multiplyArray = generateMultiplyArray(start,stop);
   output = printMultiplyTable(multiplyArray);
   return output;
}

function isValid(start,stop){
    return start<stop && start>=1&&start<=1000&&stop>=1&&stop<=1000;
    
}

function generateMultiplyArray(start,stop){
    var result = [];
    for(var i = start;i<=stop;i++){
        result[i-start]= []; 
        for(var j = start;j<=i;j++){
            result[i-start][j-start] = j+"*"+i+"="+i*j;
        }
    }
    return result;

}

function printMultiplyTable(multiplyArray){ 
    var output = "";
    for(var i=0;i<multiplyArray.length;i++){
        for(j=0;j<multiplyArray[i].length;j++){
            output = output+multiplyArray[i][j]+" ";
        }
        output += "\n";
    }
    return output;
}

module.exports = {
    isValid,
    multiplyTable,
    generateMultiplyArray,
    printMultiplyTable
}

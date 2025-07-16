//return largest element of the array 
const number = [10,20,30,60,80,90];
function largestElement(number){
    let max = null;
    if(Array.isArray(number) && number.length > 0 ){
        max = number[0];
        for(let i= 1; i < number.length; i++){
            if(max < number[i]){
                max = number[i];
            }
        }
    }
    return max;
}
const result = largestElement(number);
console.log("result :", result);
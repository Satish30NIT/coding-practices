
//find the smallest elements of the array

const number = [10,20,40,5,80,77];
function smallestElement(number){
    let min = null;
    if(Array.isArray(number) && number.length > 0 ){
        min = number[0];
        for(let i = 0 ; i < number.length ; i++){
            if(min > number[i]){
                min = number[i];
            }
        }
    }
    return min;
}
const result = smallestElement(number);
console.log("result :",result);
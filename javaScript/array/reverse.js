//reverse array of elements
const number = [10,20,30,60,80,90];
function reverseArray(number){
    if(Array.isArray(number) && number.length > 0){
        for(let i = 0 ; i < number.length/2; i++){
            const temp = number[i];
            number[i] = number[number.length-1-i];
            number[number.length-1-i] = temp;
        }
    }
    return number;
}
const result = reverseArray(number);
console.log("result :", result);
// Print elements at even indices
const number = [10,20,30,70,80];
function printEvenIndex(number){
    let result = [];
    if(Array.isArray(number) && number.length > 0 ){
        for(let i = 0 ; i < number.length ; i++){
            if(i % 2 == 0){
                result.push(i);
            }
        }
    }
    return result;
}
const result = printEvenIndex(number);
console.log("RESULT : ", result);
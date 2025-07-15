const arr = [10,20,30,70,80];
function countElements(arr){
    let count = 0 ;
    if(typeof arr == "object"){
        for(let i = 0 ; i < arr.length ; i++){
            count++;
        }
    }
    return count;
}
const count = countElements(arr);
console.log("count : ", count);
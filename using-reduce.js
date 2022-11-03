// must use reduce

let arr = [3,4];

function adder(arr ,accumulateur= 0){
    return arr.reduce((prev,curr) => prev + curr, accumulateur);
     
}
function sumOrMul(arr, accumulateur = 0){
    return arr.reduce((prev,curr) => {
        if ((curr % 2 === 0) ){
            return prev * curr;
        }
        else{
            return prev + curr;
        }
    }, accumulateur);
}


console.log(sumOrMul(arr, 6));

// why sumOrMul(arr, 6) = 36 and not 18? because the 6 is the accumulateur and not the first element of the array (3) so the reduce start with 6 and not 3 and the 6 is even so the reduce will multiply the 6 with the next element of the array (4) and so on

function funcExec(arr, func){
    return arr.reduce((prev,curr) => {
        return func(prev,curr);
    });
}
// must use reduce

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

// console.log(sumOrMul(arr, 6));

// why sumOrMul(arr, 6) = 36 and not 18? because the 6 is the accumulateur and not the first element of the array (3) so the reduce start with 6 and not 3 and the 6 is even so the reduce will multiply the 6 with the next element of the array (4) and so on

function funcExec(func,x){ // sum = sum of the previous functions and current is the current function
    let result = func.reduce(function(sum, current) { // sum = 0, current = 1 => sum = 1 , current = 2 => sum = 3 , current = 3 => sum = 6
        return current(sum); // current is the current function to execute on the sum of the previous functions
      }, x)
    return result; // return the result of the last function call 
}

// console.log(funcExec([function(x){return x+1},function(x){return x*2},function(x){return x+3}], 0))


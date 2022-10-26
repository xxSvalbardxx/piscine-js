function multiply(a, b){
    var negative = false;
    if(a < 0){
        negative = true;
        a = -a;
    }
    if (b < 0){
        negative = !negative;
        b = -b;
    }
    var count = 0;
    for(var i = 0; i < b; i++){
        count += a;
    }
    if(negative){
        return -count;
    }
    return count;
        
    
}
function divide(a, b){
    var negative = false;
    if(a < 0){
        negative = true;
        a = -a;
    }
    if (b < 0){
        negative = !negative;
        b = -b;
    }
    var count = 0;
    while(a >= b){
        a -= b;
        count++;
    }
    if(negative){
        return -count;
    }
    return count;
}

function modulo(a, b){
    var negative = false;
    if(a < 0){
        negative = true;
        a = -a;
    }
    if (b < 0){
        b = -b;
    }
    var count = 0;
    while(a >= b){
        a -= b;
        count++;
    }
    if(negative){
        return -a;
    }
    return a;
}
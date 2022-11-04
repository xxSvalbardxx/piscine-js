export function getArchitects(){
    var rslt = [];
    var yes = document.getElementsByTagName('a'); // document is a global variable that refers to the DOM of the page
    var no = document.getElementsByTagName('span');
    let y = Array.from(yes); // convert HTMLCollection to Array
    let n = Array.from(no);

    rslt.push(y);
    rslt.push(n);
    
    return rslt;
}
// what is DOM ?
// DOM is a tree structure that represents the HTML document

export function getClassical(){
    var rslt = [];
    var cla = Array.from(document.getElementsByClassName('classical'));
    var others = document.querySelectorAll('a:not(.classical)');
    
    
    let yes = Array.from(cla);
    let no = Array.from(others);
    
    rslt.push(yes);
    rslt.push(no);

    return rslt;
}

export function getActive(){
    var rslt = [];
    var yes = Array.from(document.getElementsByClassName('classical active'));
    var no = Array.from(document.querySelectorAll('a.classical:not(.active)'));
    rslt.push(yes);
    rslt.push(no);
    
    return rslt;
}

export function getBonannoPisano(){
    var rslt = [];
    var yes = document.getElementById("BonannoPisano"); 
    var no = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'));
    rslt.push(yes);
    rslt.push(no);

    return rslt;
}

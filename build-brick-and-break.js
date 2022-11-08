
export function build(nbrBricks) {
  let i = 1;
  let bricks = setInterval(function() { // set interval allows to repeat the function every 100ms
    var brick = document.createElement("div");
    brick.innerHTML = i;
    
    brick.id = "brick-" + i;
    document.body.appendChild(brick);
    if ((i -2) % 3 == 0) {
      brick.dataset.foundation = true;
    }
    i++;
    if (i > nbrBricks) {
      clearInterval(bricks); // stop the interval 
    }
    console.log(brick.hasAttribute("foundation"));
  }, 100);
}
// function repair receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
export function repair(...arg) { // ... is the rest operator that allows to pass any number of arguments
  for (let i = 1; i < arg.length; i++) {
    let brick = document.getElementById(arg[i]);

    let temp = arg[i].replace("brick-", "");

    if (brick.hasAttribute("foundation")) {
      brick.setAttribute('data-repaired',"in progress")
      brick.innerHTML = temp;
    } else {
      brick.setAttribute('data-repaired',"true")
      brick.innerHTML = temp;
    }
  }

  
}
// remove the last brick
export function destroy() {
  var brick = document.querySelector(".brick:last-child");
  brick.remove();
  /*
   let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
    */
}

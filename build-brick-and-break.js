
export function build(nbrBricks) {
  let i = 1;
  let bricks = setInterval(function() {
    var brick = document.createElement("div");
    brick.innerHTML = i;
    
    brick.id = "brick-" + i;
    document.body.appendChild(brick);
    if ((i -2) % 3 == 0) {
      brick.dataset.foundation = true;
    }
    i++;
    if (i > nbrBricks) {
      clearInterval(bricks);
    }
    console.log(brick.hasAttribute("foundation"));
  }, 100);
}
// function repair receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
export function repair(arg) {
  for (let i = 0; i < arg.length; i++) {
    let brick = document.getElementById(arg[i]);
    if (brick.hasAttribute("foundation")) {
      brick.dataset.repaired = true;
      brick.innerHTML = "i";
    } else {
      brick.dataset.repaired = "in progress";
      brick.innerHTML = "i";
    }
  }

  
}
// remove the last brick
export function destroy() {
  var brick = document.querySelector(".brick:last-child");
  brick.remove();
}

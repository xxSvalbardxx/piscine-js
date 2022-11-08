
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
  }, 100);
}
// function repair receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
export function repair(...arg) { // ... is the rest operator that allows to pass any number of arguments
  for (let element of arg) {
    let brick = document.getElementById(element);

    let temp = element.replace('brick-', '');

    if (temp % 3 === 2) {
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
  
  let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
  
/*
(only if the bricks have a class)
var brick = document.querySelector(".brick:last-child");
  brick.remove();

    */
}

/*
let idAdd = 1;

export const build = (nbr) => {
    
    let counterFoundation = 2;
    let block = '';

    for (let i = 1; i <= nbr; i++) {
        setTimeout(() => {
        block = document.createElement('div');
        document.body.appendChild(block);
        block.id = 'brick-'+idAdd;
        idAdd++;
        
        if (counterFoundation === 3) {
        block.dataset.foundation = true
        counterFoundation = 0;
        }
        counterFoundation++;
        
        
        }, 100 * i);
    }
}

export const repair = (...repairs) => { // ...repair est utilisé pour récupérer un nombre indéfini d'arguments, donc ici, un nombre indéfini d'ID

    for (const element of repairs) {
        let elem = document.getElementById(element)
       
        let n = element.replace('brick-', '')
        if(n%3===2){ // Si l'ID est divisible par 3 et que le reste est égal à 2, alors on supprime l'attribut foundation (pour la colonne du milieu)
            elem.setAttribute('data-repaired',"in progress")
            elem.innerHTML = n
        }else{
            elem.setAttribute("data-repaired","true")
            elem.innerHTML = n
        }
        
    }

}

export const destroy = () => {

    let div = document.getElementById('brick-'+(idAdd-1));
    div.remove();
    idAdd--;

}*/

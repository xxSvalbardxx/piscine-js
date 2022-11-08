export function generateLetters() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  letters = letters.toUpperCase();
  for (let i = 1; i <= 120; i++) {
    let letter= '';
    letter = letters.charAt(Math.floor(Math.random() * letters.length)); 
    let elem = document.createElement("div");
    elem.innerHTML = letter;
    elem.style.fontSize = (i + 10) + 'px'; // 10px is the minimum font size

    if (i <= 40) { // 40 is the number of letters with font-weight: 300
      elem.style.fontWeight = "300"; //
    } else if (i <= 80) { // 80 is the number of letters with font-weight: 400
      elem.style.fontWeight = "400";
    } else {
      elem.style.fontWeight = "600";
    }
    document.body.append(elem);
    
  }
}

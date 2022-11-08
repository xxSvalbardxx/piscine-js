export function generateLetters() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  letters = letters.toUpperCase();
  for (let i = 1; i <= 120; i++) {
    let letter= '';
    letter = letters.charAt(Math.floor(Math.random() * letters.length));
    let elem = document.createElement("div");
    elem.innerHTML = letter;
    elem.style.fontSize = (i + 10) + 'px';

    if (i <= 40) {
      elem.style.fontWeight = "300";
    } else if (i <= 80) {
      elem.style.fontWeight = "400";
    } else {
      elem.style.fontWeight = "600";
    }
    document.body.append(elem);
    console.log(i);
  }
}

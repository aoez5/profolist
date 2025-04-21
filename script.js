const texts = [
  "I love building APIs.",
  "Currently learning Node.js.",
  "Backend > Frontend (fight me).",
  "Trying to master databases.",
  "Let's build something cool!"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typewriter").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // wait before next string
  } else {
    setTimeout(type, 80); // typing speed
  }
})();
import { alphabets } from "./script.js";

const fontbox = document.querySelectorAll(".font-box");
const inputbox = document.querySelector(".input-box");

inputbox.addEventListener("input", () => {
  console.log("Meow");
  fontbox.forEach((box) => {
    fontchange(inputbox.value, box, box.id);
  });
});

function fontchange(text, element, font) {
  font = font.replace("font", "");
  let a = parseInt(font);
  let answer = "";

  for (let i = 0; i < text.length; i++) {
    if (alphabets[a][text[i]] != undefined) {
      answer += alphabets[a][text[i]];
    } else {
      answer += text[i];
    }
  }
  element.innerText = answer;
}

fontbox.forEach((box) => {
  box.addEventListener("click", () => {
    let range = document.createRange();
    range.selectNode(box);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    color(box);
  });
});

function color(box) {
  box.classList.add("border");
  setTimeout(() => {
    box.classList.remove("border");
  }, 1000);
}

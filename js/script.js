"use strict";

const questions = document.querySelectorAll(".expand");
const clickableQuestions = document.querySelectorAll(".question-clickable");

for (let i = 0; i < questions.length; i++) {
  const toExpand = document.createElement("img");
  toExpand.id = "icon-" + (i + 1);
  if (document.getElementById("a" + (i + 1)).classList.contains("open")) {
    toExpand.src = "../assets/images/icon-minus.svg";
  } else {
    toExpand.src = "../assets/images/icon-plus.svg";
  }
  questions[i].appendChild(toExpand);
}

for (let i = 0; i < clickableQuestions.length; i++) {
  clickableQuestions[i].addEventListener("click", function () {
    const answer = document.getElementById("a" + (i + 1));
    answer.classList.toggle("open");
    if (answer.classList.contains("open")) {
      document
        .getElementById("icon-" + (i + 1))
        .setAttribute("src", "../assets/images/icon-minus.svg");
    } else {
      document
        .getElementById("icon-" + (i + 1))
        .setAttribute("src", "../assets/images/icon-plus.svg");
    }
  });
}

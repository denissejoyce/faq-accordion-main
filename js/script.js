"use strict";

const questions = document.querySelectorAll(".expand");

for (let i = 0; i < questions.length; i++) {
  const toExpand = document.createElement("img");
  toExpand.id = "icon-" + (i + 1);
  if (document.getElementById("a" + (i + 1)).classList.contains("hide")) {
    toExpand.src = "../assets/images/icon-plus.svg";
  } else {
    toExpand.src = "../assets/images/icon-minus.svg";
  }
  questions[i].appendChild(toExpand);
}

const clickableQuestions = document.querySelectorAll(".question-clickable");

for (let i = 0; i < clickableQuestions.length; i++) {
  clickableQuestions[i].addEventListener("click", function () {
    const answer = document.getElementById("a" + (i + 1));
    answer.classList.toggle("hide");
    if (answer.classList.contains("hide")) {
      document
        .getElementById("icon-" + (i + 1))
        .setAttribute("src", "../assets/images/icon-plus.svg");
    } else {
      document
        .getElementById("icon-" + (i + 1))
        .setAttribute("src", "../assets/images/icon-minus.svg");
    }
  });
}

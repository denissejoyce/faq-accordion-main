"use strict";

// const toExpand = document.createElement("img");
// toExpand.setAttribute("src", "../assets/images/icon-plus.svg");

// const expandDiv = document.querySelectorAll(".expand");

// const questions = document.querySelectorAll(".expand");

// for (let i = 0; i < questions.length; i++) {
//  questions[i].appendChild(t oExpand);
// }

//   toExpand.setAttribute("src", "../assets/images/icon-plus.svg");

const questions = document.querySelectorAll(".expand");
for (let i = 0; i < questions.length; i++) {
  const toExpand = document.createElement("img");
  toExpand.src = "../assets/images/icon-plus.svg";
  //   toExpand.className = "toExpandIcon";
  questions[i].appendChild(toExpand);
}

const clickableQuestions = document.querySelectorAll(".question-clickable");

for (let i = 0; i < clickableQuestions.length; i++) {
  clickableQuestions[i].addEventListener("click", function () {
    document.getElementById("a" + (i + 1)).classList.toggle("hide");
  });
}

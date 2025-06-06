import { noBtn } from "../index.js";
import {
  generateSecondPopup,
  generateThirdPopup,
} from "./firstPartnerVerify.js";
import { generateFirstForm } from "./secondPartnerVerify.js";

let mouseClickCounter = 0;

const changeButtonText = (btn1Text, btn2Text) => {
  const formButtons = document.getElementsByClassName("question-btn");

  formButtons[0].innerText = btn1Text;
  formButtons[1].innerText = btn2Text;
};

const nextSectionBtnEvent = (btnElement) => {
  const formElement = document.getElementById("main-form");
  const sections = ["first", "second", "third"];

  btnElement.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      const formCurrentClass = formElement.classList.contains(sections[i]);

      if (formCurrentClass) {
        switch (sections[i]) {
          case "first":
            generateSecondPopup(formElement);
            break;
          case "second":
            generateThirdPopup(formElement);
            break;
          case "third":
            generateFirstForm(formElement);
            break;
        }
        break;
      }
    }
  });
};

const makeRunawayButton = () => {
  noBtn.style.position = "absolute";
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const maxX = windowWidth - noBtn.offsetWidth;
  const maxY = windowHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  mouseClickCounter++;

  if (mouseClickCounter === 6) {
    removeNoBtnEvent(noBtn);

    noBtn.innerText = "SIM!";
    noBtn.classList.remove("no");
    noBtn.classList.add("yes");

    noBtn.addEventListener("click", () => {
      const formElement = document.getElementById("main-form");
      generateSecondPopup(formElement);
    });
  }
};

const removeNoBtnEvent = (element) => {
  element.removeEventListener("mouseover", makeRunawayButton);
  element.style.position = "relative";
  element.style.top = "0px";
  element.style.left = "0px";
};

// const createNextPageEvent = () => {
//   const nextPageBtn = document.querySelector(".next-page");
//   nextPageBtn.addEventListener("click");
// };

export {
  changeButtonText,
  makeRunawayButton,
  nextSectionBtnEvent,
  removeNoBtnEvent,
};

import { makeRunawayButton, nextSectionBtnEvent } from "./scripts/buttons.js";

const formElement = document.getElementById("main-form");
formElement.classList.add("first");

const formButtons = document.getElementsByClassName("question-btn");

const yesBtn = formButtons[0];
const noBtn = formButtons[1];

formElement.addEventListener("submit", (e) => e.preventDefault());

nextSectionBtnEvent(yesBtn);

noBtn.addEventListener("mouseover", makeRunawayButton);

export { yesBtn, noBtn };

import { genFirstForm } from "./form.js";
import { createPopupInfoAndShow } from "./popup.js";

const sections = ["first", "second", "third"];

const mainContainer = document.getElementById("content-container");
const mainTextParagraph = document.querySelector(".main-text");
const questionButtons = document.getElementsByClassName("question-btn");

const yesBtn = questionButtons[0];
const noBtn = questionButtons[1];

// Event for "YES" button

const createYesBtnEvent = () => {
  yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      const currentSectionClass = mainContainer.classList.contains(sections[i]);

      if (currentSectionClass) {
        switch (sections[i]) {
          case "first":
            genFirstNameValidation();
            break;
          case "second":
            genSecondNameValidation();
            break;
          case "third":
            genFirstForm();
            break;
        }
        break;
      }
    }
  });
};

// Event for "NO" button

const createNoBtnEvent = () => {
  if (mainContainer.classList.contains("first")) {
    noBtn.addEventListener("click", firstValidationNoBtnEvent);
  } else if (mainContainer.classList.contains("second")) {
    noBtn.addEventListener("click", secondValidationNoBtnEvent);
  } else if (mainContainer.classList.contains("third")) {
  }
};

// Validation "NO" button events

const firstValidationNoBtnEvent = () => {
  createPopupInfoAndShow("Cuidado", "Você quis dizer SIM?", "warning");

  noBtn.innerText = "SIM!";
  noBtn.classList.remove("no");
  noBtn.classList.add("yes");

  noBtn.removeEventListener("click", firstValidationNoBtnEvent);

  noBtn.addEventListener("click", genFirstNameValidation);
};

const secondValidationNoBtnEvent = () => {
  createPopupInfoAndShow(
    "Cuidado",
    "Se não é você, clique no botão NÃO",
    "warning"
  );

  noBtn.classList.add("hidden");

  noBtn.removeEventListener("click", secondValidationNoBtnEvent);

  noBtn.addEventListener("click", genSecondNameValidation);
};

// Element changing functions

const genFirstNameValidation = () => {
  mainContainer.classList.remove("first");
  mainContainer.classList.add("second");

  noBtn.classList.remove("yes");
  noBtn.classList.add("no");

  noBtn.removeEventListener("click", genFirstNameValidation);

  mainTextParagraph.innerText = "SEU NOME É ISABELLY PORSSE??";
  changeButtonText("Sim, sou eu", "Não conheço esse nome");

  createNoBtnEvent();
};

const genSecondNameValidation = () => {
  noBtn.classList.remove("hidden");

  mainContainer.classList.remove("second");
  mainContainer.classList.add("third");

  noBtn.removeEventListener("click", genSecondNameValidation);

  mainTextParagraph.innerText =
    "TEM CERTEZA QUE SEU NOME É ISABELLY PORSSE DE PAULA??";
  changeButtonText("Claro que sim!", "Não sei... será?");
};

// Neutral functions

const changeButtonText = (yesBtnText, noBtnText) => {
  yesBtn.innerText = yesBtnText;
  noBtn.innerText = noBtnText;
};

export { createYesBtnEvent, createNoBtnEvent };

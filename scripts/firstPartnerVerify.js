import { changeButtonText } from "./buttons.js";

const generateSecondPopup = (formElement) => {
  formElement.classList.remove("first");
  formElement.classList.add("second");

  const mainTextP = document.querySelector(".main-text");
  mainTextP.innerText = "SEU NOME É ISABELLY PORSSE??";
  changeButtonText("Sim, sou eu", "Não conheço esse nome");
};

const generateThirdPopup = (formElement) => {
  formElement.classList.remove("second");
  formElement.classList.add("third");

  const mainTextP = document.querySelector(".main-text");
  mainTextP.innerText = "TEM CERTEZA QUE SEU NOME É ISABELLY PORSSE DE PAULA??";
  changeButtonText("Claro que sim!", "Não sei... será?");
};

export { generateSecondPopup, generateThirdPopup };

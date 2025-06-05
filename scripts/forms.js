const generateFirstSection = (formElement) => {
  const mainTextP = document.querySelector(".main-text");
  mainTextP.innerText = "SEU NOME É ISABELLY PORSSE??";
  changeButtonText("Sim, sou eu", "Não conheço esse nome");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    generateSecondSection(formElement);
  });
};

const generateSecondSection = (formElement) => {
  const mainTextP = document.querySelector(".main-text");
  mainTextP.innerText =
    "TEM CERTEZA QUE SEU NOME É KAYLA CRISSYAN FONTES VIEIRA??";
  changeButtonText("Claro que sim!", "Não sei... será?");
};

const changeButtonText = (btn1Text, btn2Text) => {
  const formButtons = document.getElementsByClassName("question-btn");

  const yesBtn = formButtons[0];
  const noBtn = formButtons[1];

  yesBtn.innerText = btn1Text;
  noBtn.innerText = btn2Text;
};

export { generateFirstSection };

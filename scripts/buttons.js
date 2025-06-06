const changeButtonText = (btn1Text, btn2Text) => {
  const formButtons = document.getElementsByClassName("question-btn");

  const yesBtn = formButtons[0];
  const noBtn = formButtons[1];

  yesBtn.innerText = btn1Text;
  noBtn.innerText = btn2Text;
};

export { changeButtonText };

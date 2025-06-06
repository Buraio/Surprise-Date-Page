import {
  generateSecondPopup,
  generateThirdPopup,
} from "./scripts/firstPartnerVerify.js";
import {
  generateFirstForm,
  generateSecondForm,
} from "./scripts/secondPartnerVerify.js";

const formElement = document.getElementById("main-form");
const sections = ["first", "second", "third", "fourth", "fifth"];

formElement.classList.add("first");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

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
        case "fourth":
          generateSecondForm(formElement);
      }
      break;
    }
  }
});

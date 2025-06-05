import { generateFirstSection } from "./scripts/forms.js";

const formElement = document.getElementById("main-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  generateFirstSection(formElement);
});

import { createPopupInfoAndShow } from "./popup.js";

const mainContainer = document.getElementById("main-form");
const popupBack = document.querySelector(".popup-background");
const closePopupImg = document.querySelector(".close-popup");

let isFirstFormComplete = false;
let isSecondFormComplete = false;

// First and second form generation

const genFirstForm = () => {
  mainContainer.classList.remove("third");
  mainContainer.innerHTML = "";

  mainContainer.insertAdjacentHTML(
    "beforeend",
    `
    <form class="main-form">
      <div class="main-container">
        <p class="form-paragraph">SE VOCÊ É REALMENTE ELA, PREENCHA O PEQUENO FORMULÁRIO DE 27 PÁGINAS ABAIXO</p>
        <div class="input-container">
          <label class="base-label" for="first-name">Primeiro nome <input id="first-name" class="base-input" type="text"></label>
          <label class="base-label" for="second-name">Segundo nome <input id="second-name" class="base-input" type="text"></label>
          <label class="base-label" for="favorite-meadow">Seu prato favorito <input id="favorite-meadow" class="base-input" type="text"></label>
          <label class="base-label" for="beauty-level">Nível de beleza <input id="beauty-level" class="base-input" type="number"></label>    
          <span class="beauty-range">(Preencha de 0 a 10)</span>
        </div>
      </div>
      <div class="sidebar">
        <span class="page-sidebar">Página 1/27</span>
        <button class="next-page">Próxima página</button>
      </div>
    </form>
    `
  );

  firstFormValidationEvent();
};

const genSecondForm = () => {
  mainContainer.innerHTML = "";

  mainContainer.insertAdjacentHTML(
    "beforeend",
    `
    <form class="main-form">
      <div class="main-container">
        <div class="paragraph-container">
          <p class="form-paragraph">BRINCADEIRA, SÃO SÓ DUAS PÁGINAS</p>
          <p class="form-paragraph">PORÉM AINDA NÃO ESTOU CONVENCIDA QUE VOCÊ SEJA A ISA. PREENCHA COM SUA MÚSICA FAVORITA ATUALMENTE</p>
        </div>
        <label class="base-label" for="favorite-music"><input id="favorite-music" type="text"></label>
        <label class="base-label" for="my-favorite-meadow">Meu prato favorito <input id="my-favorite-meadow" type="text"></label>
        <label class="base-label" for="confirmation">Você quer mesmo abrir este presente? <input id="confirmation" type="text"></label>
      </div>
      <div class="sidebar">
        <span class="page-sidebar">Página 2/2</span>
        <button class="next-page">Finalizar</button>
      </div>
    </form>
    `
  );
};

// First and second form data validation

const firstFormValidationEvent = () => {
  const formElement = document.getElementById("main-form");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    getAndValidateFirstFormAnswers();

    genSecondForm();
  });
};

const secondFormValidationEvent = () => {
  const formElement = document.getElementById("main-form");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    getAndValidateFirstFormAnswers();
  });
};

// Input values

const getAndValidateFirstFormAnswers = () => {
  const inputElements = document.querySelectorAll(".base-input");

  const correctAnswers = {
    firstName: "isabelly",
    secondName: "coração",
    favMeadow: "lasanha",
    beautyLevel: 11,
  };

  const formAnswers = {
    firstName: inputElements[0].value.toLowerCase(),
    secondName: inputElements[1].value.toLowerCase(),
    favMeadow: inputElements[2].value.toLowerCase(),
    beautyLevel: inputElements[3].value,
  };

  for (let key in formAnswers) {
    if (formAnswers[key] === "") {
      createPopupInfoAndShow(
        "Erro",
        "Ops! Ainda há campos a serem preenchidos",
        "error"
      );

      return false;
    }
  }

  if (formAnswers.firstName === correctAnswers.firstName) {
    if (formAnswers.favMeadow === correctAnswers.favMeadow) {
      console.log(1111);
      if (formAnswers.secondName !== "Coração") {
        console.log("fasdfsafadsfasdfdsadafdfsdf");
        if (formAnswers.beautyLevel !== 11) {
          createPopupInfoAndShow(
            "Erro",
            "Só isso de beleza? Não é possível...",
            "error"
          );

          closePopupImg.addEventListener("click", showAnotherPopup);

          inputElements[1].value = "Coração";
          inputElements[3].value = 11;
        }
      } else {
        if (formAnswers.beautyLevel === 11) {
          console.log();
          createPopupInfoAndShow(
            "Incrível",
            "Como você acertou todas as respostas? Deve ser ela",
            "check"
          );
        }
      }
    } else {
      createPopupInfoAndShow(
        "Erro",
        "Respostas erradas. Ainda tem certeza de que você é a Isa?",
        "error"
      );
    }
  } else {
    createPopupInfoAndShow(
      "Erro",
      "Respostas erradas. Ainda tem certeza de que você é a Isa?",
      "error"
    );
  }
};

const showAnotherPopup = () => {
  popupBack.classList.add("hidden");

  createPopupInfoAndShow(
    "Corrigido",
    "Agora ficou bem melhor. Dê uma olhada",
    "check"
  );

  closePopupImg.removeEventListener("click", showAnotherPopup);
};

const getAndValidateSecondFormAnswers = () => {
  const inputElements = document.querySelectorAll(".base-input");
};

export { genFirstForm, genSecondForm };

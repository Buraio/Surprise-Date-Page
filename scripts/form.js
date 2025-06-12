import { createPopupInfoAndShow } from "./popup.js";

const mainContainer = document.getElementById("content-container");
const popupBack = document.querySelector(".popup-background");
const closePopupImg = document.querySelector(".close-popup");

let inviteControl = false;

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
        <button class="form-btn next-page">Próxima página</button>
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
          <p class="form-paragraph">PORÉM AINDA NÃO ESTOU CONVENCIDA QUE VOCÊ SEJA A ISA. PREENCHA COM SUA MÚSICA FAVORITA ATUALMENTE:</p>
        </div>
        <div class="input-container">
          <label class="base-label" for="favorite-music"><input id="favorite-music" class="base-input" type="text"></label>
          <label class="base-label" for="my-favorite-meadow">Adivinhe meu prato favorito <input id="my-favorite-meadow" class="base-input" type="text"></label>
          <label class="base-label" for="confirmation">Você quer mesmo abrir este presente? <input id="confirmation" class="base-input" type="text"></label>
        </div>
      </div>
      <div class="sidebar">
        <span class="page-sidebar">Página 2/2</span>
        <button class="form-btn finalize">Finalizar</button>
      </div>
    </form>
    `
  );

  secondFormValidationEvent();
};

// First and second form data validation

const firstFormValidationEvent = () => {
  const formElement = document.querySelector(".main-form");
  const nextPageBtn = document.querySelector(".next-page");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  nextPageBtn.addEventListener("click", getAndValidateFirstFormAnswers);
};

const secondFormValidationEvent = () => {
  const formElement = document.querySelector(".main-form");
  const finalizeBtn = document.querySelector(".finalize");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  finalizeBtn.addEventListener("click", getAndValidateSecondFormAnswers);
};

// Input values

const getAndValidateFirstFormAnswers = () => {
  const inputElements = document.querySelectorAll(".base-input");

  const correctAnswers = {
    firstName: "isabelly",
    secondName: "coração",
    favMeadow: "lasanha",
    beautyLevel: "11",
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
      if (formAnswers.secondName !== correctAnswers.secondName) {
        console.log("fasdfsafadsfasdfdsadafdfsdf");
        if (formAnswers.beautyLevel !== correctAnswers.beautyLevel) {
          createPopupInfoAndShow(
            "Erro",
            "Só isso de beleza? Não é possível...",
            "error"
          );

          closePopupImg.addEventListener("click", showAnotherPopup);

          inputElements[1].value = "Coração";
          inputElements[3].value = "11";

          const nextPageBtn = document.querySelector(".next-page");

          nextPageBtn.addEventListener("click", () => {
            genSecondForm();
          });
          return false;
        }
      } else {
        if (formAnswers.beautyLevel === correctAnswers.beautyLevel) {
          createPopupInfoAndShow(
            "Incrível",
            "Como você acertou todas as respostas?",
            "check"
          );

          genSecondForm();
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

  const correctAnswers = {
    favoriteMusic: "p do pecado",
    myFavMeadow: "carbonara",
  };

  const formAnswers = {
    favoriteMusic: inputElements[0].value.toLowerCase(),
    myFavMeadow: inputElements[1].value.toLowerCase(),
  };

  if (formAnswers.favoriteMusic === correctAnswers.favoriteMusic) {
    if (formAnswers.myFavMeadow === correctAnswers.myFavMeadow) {
      if (inputElements[2].value.toLowerCase() === "sim") {
        if (!inviteControl) {
          createPopupInfoAndShow("Erro", "Então isso é um não?", "error");

          inputElements[2].value = "NÃO";

          inviteControl = true;
        } else {
          const finalizeBtn = document.querySelector(".finalize");

          inputElements[2].value = "🥰";
          finalizeBtn.innerText = "Carregando...";

          window.setTimeout(() => {
            window.location.replace("./pages/invite/index.html");
          }, 2000);
        }
      } else if (inputElements[2].value.toLowerCase() === "não") {
      }
    } else {
      createPopupInfoAndShow(
        "Erro",
        "Respostas incorretas... tente de novo.",
        "error"
      );
    }
  } else {
    createPopupInfoAndShow(
      "Erro",
      "Respostas incorretas... tente de novo.",
      "error"
    );
  }
};

export { genFirstForm, genSecondForm };

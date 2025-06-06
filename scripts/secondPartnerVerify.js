const generateFirstForm = (formElement) => {
  formElement.classList.remove("third");
  formElement.classList.add("fourth");

  formElement.innerHTML = "";

  formElement.insertAdjacentHTML(
    "beforeend",
    `
    <div class="divisor">
      <div class="main-container">
        <p class="form-paragraph">SE VOCÊ É REALMENTE ELA, PREENCHA O PEQUENO FORMULÁRIO DE 27 PÁGINAS ABAIXO</p>
        <div class="input-container">
          <label class="base-label" for="first-name">Primeiro nome <input id="first-name" type="text"></label>
          <label class="base-label" for="second-name">Segundo nome <input id="second-name" type="text"></label>
          <label class="base-label" for="favorite-meadow">Seu prato favorito <input id="favorite-meadow" type="text"></label>
          <label class="base-label" for="beauty-level">Nível de beleza <input id="beauty-level" type="number"></label>    
          <span class="beauty-range">(Preencha de 0 a 10)</span>
        </div>

        </div>
        <div class="sidebar">
          <span class="page-sidebar">Página 1/27</span>
          <button class="next-page">Próxima página</button>
        </div>
    </div>
    `
  );
};

const generateSecondForm = (formElement) => {
  formElement.classList.remove("fourth");
  formElement.classList.add("fifth");

  formElement.innerHTML = "";

  formElement.insertAdjacentHTML(
    "beforeend",
    `
      <p class="form-paragraph">BRINCADEIRA, SÃO SÓ DUAS PÁGINAS</p>
      <p class="form-paragraph">PORÉM AINDA NÃO ESTOU CONVENCIDA QUE VOCÊ SEJA A KAYLA. PREENCHA COM SUA MÚSICA FAVORITA</p>

      <label for="favorite-music"><input id="favorite-music" type="text"></label>
      <label for="my-favorite-meadow">Meu prato favorito <input id="my-favorite-meadow" type="text"></label>
      <label for="confirmation">Você quer mesmo abrir este presente? <input id="confirmation" type="text"></label>
      <button>Finalizar</button>
    `
  );
};

export { generateFirstForm, generateSecondForm };

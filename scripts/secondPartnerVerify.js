const generateFirstForm = (formElement) => {
  formElement.classList.remove("third");
  formElement.classList.add("fourth");

  formElement.innerHTML = "";

  formElement.insertAdjacentHTML(
    "beforeend",
    `
    <div class="main-container">
      <p>SE VOCÊ É REALMENTE ELA, PREENCHA O PEQUENO FORMULÁRIO DE 27 PÁGINAS ABAIXO</p>
      <label for="first-name">Primeiro nome <input id="first-name" type="text"></label>
      <label for="second-name">Segundo nome <input id="second-name" type="text"></label>
      <label for="favorite-meadow">Seu prato favorito <input id="favorite-meadow" type="text"></label>
      <label for="beauty-level">Nível de beleza <input id="beauty-level" type="number"></label>    
      <span>Preencha de 0 a 10</span>

      <button>Próxima página</button>
    </div>

    <span>Página 1/27</span>
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
      <p>BRINCADEIRA, SÃO SÓ DUAS PÁGINAS</p>
      <p>AINDA NÃO ESTOU CONVENCIDO QUE VOCÊ SEJA A KAYLA. PREENCHA COM SUA MÚSICA FAVORITA</p>

      <label for="favorite-music"><input id="favorite-music" type="text"></label>
      <label for="my-favorite-meadow">Meu prato favorito <input id="my-favorite-meadow" type="text"></label>
      <label for="confirmation">Você quer mesmo abrir este presente? <input id="confirmation" type="text"></label>
      <button>Finalizar</button>
    `
  );
};

export { generateFirstForm, generateSecondForm };

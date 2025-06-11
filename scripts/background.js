const toggleBackgroundImgEvent = () => {
  const backgroundBtn = document.querySelector(".background-button");
  const mainContainer = document.getElementById("main-form");

  backgroundBtn.addEventListener("click", () => {
    console.log();

    if (mainContainer.classList.contains("hidden")) {
      mainContainer.classList.remove("hidden");
      mainContainer.style.display = "flex";
    } else {
      mainContainer.classList.add("hidden");
      mainContainer.style.display = "none";
    }
  });
};

export { toggleBackgroundImgEvent };

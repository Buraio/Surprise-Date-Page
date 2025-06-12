const toggleBackgroundImgEvent = () => {
  const backgroundBtn = document.querySelector(".background-button");
  const mainContainer = document.getElementById("content-container");

  backgroundBtn.addEventListener("click", () => {
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

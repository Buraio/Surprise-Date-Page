//Show popup
const showPopup = () => {
  const popupBack = document.querySelector(".popup-background");

  popupBack.classList.remove("hidden");
};

// Close popup event
const createPopupCloseEvent = () => {
  const popupBack = document.querySelector(".popup-background");
  const closePopupBtn = document.querySelector(".close-popup");

  closePopupBtn.addEventListener("click", () => {
    popupBack.classList.add("hidden");
  });
};

// Create popup info
const createPopupInfoAndShow = (title, description, type) => {
  const popupHeader = document.querySelector(".popup-header");
  const popupTitle = document.querySelector(".popup-title");
  const popupDescription = document.querySelector(".popup-description");

  popupTitle.innerText = title;
  popupDescription.innerText = description;

  if (type === "warning") {
    popupHeader.classList.add("warning");
  } else if (type === "error") {
    popupHeader.classList.add("error");
  } else if (type === "check") {
    popupHeader.classList.add("check");
  }

  showPopup();
};

export { createPopupCloseEvent, createPopupInfoAndShow, showPopup };

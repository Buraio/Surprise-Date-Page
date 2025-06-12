const acceptInviteBtn = document.querySelector(".accept");
const declineInviteBtn = document.querySelector(".decline");
const imgElement = document.querySelector(".invite-img");

const manageInvite = () => {
  declineInviteBtn.addEventListener("click", makeRunawayButton);

  acceptInviteBtn.addEventListener("click", () => {
    imgElement.src = "../../assets/img/Bob-Esponja2.jpg";

    window.setTimeout(() => {
      window.location.replace("../heart/index.html");
    }, 3000);
  });
};

const makeRunawayButton = () => {
  declineInviteBtn.style.position = "absolute";

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const maxX = windowWidth - declineInviteBtn.offsetWidth;
  const maxY = windowHeight - declineInviteBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  declineInviteBtn.style.left = randomX + "px";
  declineInviteBtn.style.top = randomY + "px";
};

manageInvite();

const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", openModal);
}

function openModal() {
    const path = this.previousElementSibling.src;
    const image = document.createElement("img");
    image.src = path;
    image.classList.add("zoom");

    modal.appendChild(image);
    modal.classList.add("visible");

    // Fermeture de la modale
    image.addEventListener("click", closeModal);
}

function closeModal(event) {
    modal.classList.remove('visible');
    modal.removeChild(event.currentTarget);
}
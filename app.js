const showModalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const container = document.querySelector(".container");
const closeModalBtn = document.querySelector(".close-modal-btn");

function showModal() {
  modal.style.display = "flex";
  backdrop.style.display = "block";
  container.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  container.style.display = "flex";
}

showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

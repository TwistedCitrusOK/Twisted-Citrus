const modal = document.getElementById("menuModal");
const modalImage = document.getElementById("modalImage");
const closeButton = modal.querySelector(".close");

const menus = {
  build: ["build-refreshers.jpg", "Build Your Perfect Refresher menu"],
  specialty: ["specialty-drinks.jpg", "Specialty drinks menu"],
  kajun: ["kajun-loaded-teas.jpg", "Kajun Loaded Teas menu"],
  popsicles: ["popsicles.jpg", "Popsicle flavors menu"],
  icecream: ["ice-cream.jpg", "Ice cream favorites menu"]
};

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const [src, alt] = menus[button.dataset.modal];
    modalImage.src = src;
    modalImage.alt = alt;
    modal.showModal();
  });
});

closeButton.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

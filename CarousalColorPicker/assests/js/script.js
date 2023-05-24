document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

for (let i = 1; i <= 5; i++) {
  const colorPicker = document.getElementById(`color${i}`);
  const carouselItem = document.querySelector(`.item${i}`);
  const submitBtn = document.getElementById(`submitBtn${i}`);
  
  // Color Changer
  colorPicker.addEventListener("change", (e) => {
    carouselItem.style.backgroundColor = e.target.value;
  });

  // Submit Button Click Event
  submitBtn.addEventListener("click", () => {
    carouselItem.style.backgroundColor = colorPicker.value;
  });
}
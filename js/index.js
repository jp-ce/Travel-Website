import { tours, testimonies } from "./data.js";

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const img = document.getElementById("tour-image");
const destination = document.getElementById("destination");
const description = document.getElementById("description");

const testimonial = document.querySelector(".testimony-wrapper");
const date = document.getElementById("copyright-date");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = tours[currentItem];
  img.src = item.image;
  destination.textContent = item.destination;
  description.textContent = item.description;
});

// //Set copyright date
// date.textContent = new Date().getFullYear();
const showTour = (tour) => {
  const item = tours[tour];
  img.src = item.image;
  destination.textContent = item.destination;
  description.textContent = item.description;
};

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = tours.length - 1;
  }
  showTour(currentItem);
});

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > tours.length - 1) {
    currentItem = 0;
  }
  showTour(currentItem);
});

// testimonials

testimonial.innerHTML = testimonies
  .map((testimonial) => {
    const { image, name, heading, stars, review } = testimonial;
    const icon = `<i class="fas fa-star"></i>`;
    const numberOFStars = icon.repeat(stars);

    return `<div class="testimony">
  <div class="testimony-info">
    <img src=${image} alt=${name} />
    <div class="name txt-sm">${name}</div>
    <div class="stars txt-lg">
      
    ${numberOFStars}
    </div>
    <h2 class="txt-md">${heading}</h2>
    <p class="txt-sm">
    ${review}
    </p>
  </div>
</div>`;
  })
  .join("");

//dynamically set the date
date.textContent = new Date().getFullYear();

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const carousel1 = document.getElementById("carousel-1");
const carousel2 = document.getElementById("carousel-2");
const carousel3 = document.getElementById("carousel-3");
const carousel4 = document.getElementById("carousel-4");
const carousel5 = document.getElementById("carousel-5");
const carousel6 = document.getElementById("carousel-6");

//Event handlers
nextBtn.addEventListener("click", () => {
  goForward();
});

prevBtn.addEventListener("click", () => {
  goBackward();
});

const goForward = () => {
  if (carousel1.classList.contains("show")) {
    carousel1.classList.remove("show");
    carousel2.classList.add("show");
  } else if (carousel2.classList.contains("show")) {
    carousel2.classList.remove("show");
    carousel3.classList.add("show");
  } else if (carousel3.classList.contains("show")) {
    carousel3.classList.remove("show");
    carousel4.classList.add("show");
  } else if (carousel4.classList.contains("show")) {
    carousel4.classList.remove("show");
    carousel5.classList.add("show");
  } else if (carousel5.classList.contains("show")) {
    carousel5.classList.remove("show");
    carousel6.classList.add("show");
  } else if (carousel6.classList.contains("show")) {
    carousel6.classList.remove("show");
    carousel1.classList.add("show");
  }
};

const goBackward = () => {
  if (carousel6.classList.contains("show")) {
    carousel6.classList.remove("show");
    carousel5.classList.add("show");
  } else if (carousel5.classList.contains("show")) {
    carousel5.classList.remove("show");
    carousel4.classList.add("show");
  } else if (carousel4.classList.contains("show")) {
    carousel4.classList.remove("show");
    carousel3.classList.add("show");
  } else if (carousel3.classList.contains("show")) {
    carousel3.classList.remove("show");
    carousel2.classList.add("show");
  } else if (carousel2.classList.contains("show")) {
    carousel2.classList.remove("show");
    carousel1.classList.add("show");
  } else if (carousel1.classList.contains("show")) {
    carousel1.classList.remove("show");
    carousel6.classList.add("show");
  }
};

//code very repetitive and tedious. come back and improve

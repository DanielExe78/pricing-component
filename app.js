"use strict";

const btn = document.querySelector(".slider");
const monthly = document.querySelectorAll(".month");
const anual = document.querySelectorAll(".anual-price");

monthly.forEach((month) => {
  anual.forEach((full) => {
    btn.addEventListener("click", function () {
      if (!month.classList.contains("hidden")) {
        month.classList.toggle("hidden");
        full.classList.toggle("hidden");
      } else {
        full.classList.toggle("hidden");
        month.classList.toggle("hidden");
      }
    });
  });
});

btn.addEventListener("click", function (e) {
  if (!btn.classList.contains("left-slide")) {
    btn.classList.add("left-slide");
  } else {
    btn.classList.remove("left-slide");
  }
});

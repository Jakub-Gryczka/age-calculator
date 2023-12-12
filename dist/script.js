"use strict";
const btn = document.querySelector(".button");

console.log(btn);

btn.addEventListener("click", () => {
  console.log("clicked");
});

// btn.addEventListener("click", () => {
//   const day = document.querySelector(".dayInput").value;
//   const month = document.querySelector(".monthInput").value;
//   const year = document.querySelector(".yearInput").value;
//   console.log(day);
//   console.log(month);
//   console.log(year);
//   console.log("clicked");
// });

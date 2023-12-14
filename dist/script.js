"use strict";
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const day = document.querySelector(".inputDay");
const month = document.querySelector(".inputMonth");
const year = document.querySelector(".inputYear");
const errorElement = document.querySelectorAll(".errorMessage");
const errorDay = document.querySelector(".errorDay");
const errorMonth = document.querySelector(".errorMonth");
const errorYear = document.querySelector(".errorYear");

form.addEventListener("submit", (e) => {
  let validate = {
    day: {
      element: errorElement[0],
      errorMessage: ["siema"],
    },
    month: {
      element: errorElement[1],
      errorMessage: [],
    },
    year: {
      element: errorElement[2],
      errorMessage: [],
    },
  };
  for (const { element, errorMessage } of Object.values(validate)) {
    if (errorMessage.length > 0) {
      e.preventDefault();
      console.log("prevented");
    }
  }
});

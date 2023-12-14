"use strict";
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input");
const errorElement = document.querySelectorAll(".errorMessage");

const [day, month, year] = inputs;
const [dayError, monthError, yearError] = errorElement;

form.addEventListener("submit", (e) => {
  let validate = {
    day: {
      element: dayError,
      errorMessage: ["siema"],
    },
    month: {
      element: monthError,
      errorMessage: [],
    },
    year: {
      element: yearError,
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

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
      input: day,
      errorElement: dayError,
      errorMessage: ["siema"],
    },
    month: {
      input: month,
      errorElement: monthError,
      errorMessage: [],
    },
    year: {
      input: year,
      errorElement: yearError,
      errorMessage: [],
    },
  };
  for (const { input, errorMessage } of Object.values(validate)) {
    if (input.value === "" || input.value === null) {
      errorMessage.push("This field is required");
    }
  }

  if (day.value > 31 || day.value < 1) {
    e.preventDefault();
    validate.day.errorMessage.push("Day must be between 1 and 31");
  }
  if (month.value > 12 || month.value < 1) {
    e.preventDefault();
    validate.month.errorMessage.push("Month must be between 1 and 12");
  }

  for (const { errorMessage } of Object.values(validate)) {
    if (errorMessage.length > 0) {
      e.preventDefault();
      console.log("prevented");
    }
  }
});

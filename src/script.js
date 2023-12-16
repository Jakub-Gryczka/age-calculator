"use strict";
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input");
const errorElement = document.querySelectorAll(".errorMessage");
const formItem = document.querySelectorAll(".form__item");

const [firstItem, secondItem, thirdItem] = formItem;
const [day, month, year] = inputs;
const [dayError, monthError, yearError] = errorElement;

const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

form.addEventListener("submit", (e) => {
  let validate = {
    day: {
      item: firstItem,
      input: day,
      errorElement: dayError,
      errorMessage: [],
    },
    month: {
      item: secondItem,
      input: month,
      errorElement: monthError,
      errorMessage: [],
    },
    year: {
      item: thirdItem,
      input: year,
      errorElement: yearError,
      errorMessage: [],
    },
  };
  if (day.value > 31 || day.value < 1) {
    e.preventDefault();
    validate.day.errorMessage.push("Must be a valid day");
  }
  if (month.value > 12 || month.value < 1) {
    e.preventDefault();
    validate.month.errorMessage.push("Must be a valid month");
  }
  if (year.value > currentYear && year) {
    e.preventDefault();
    validate.year.errorMessage.push("Must be in the past");
  }

  for (const { item, input, errorElement, errorMessage } of Object.values(
    validate
  )) {
    if (input.value === "" || input.value === null) {
      errorMessage.push("This field is required");
    }
    if (errorMessage.length > 0) {
      item.classList.add("error");
      errorElement.classList.remove("hidden");
      errorElement.textContent = errorMessage;
      e.preventDefault();
    }
  }
});

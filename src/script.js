"use strict";
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input");
const errorElement = document.querySelectorAll(".errorMessage");
const formItem = document.querySelectorAll(".form__item");
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");

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
  e.preventDefault();

  let hasErrors = false;

  if (day.value > 31 || day.value < 1) {
    validate.day.errorMessage.push("Must be a valid day");
    hasErrors = true;
  }
  if (month.value > 12 || month.value < 1) {
    validate.month.errorMessage.push("Must be a valid month");
    hasErrors = true;
  }
  if (year.value > currentYear) {
    validate.year.errorMessage.push("Must be in the past");
    hasErrors = true;
  }

  for (const { item, input, errorElement, errorMessage } of Object.values(
    validate
  )) {
    if (input.value === "" || input.value === null) {
      errorMessage.push("This field is required");
      hasErrors = true;
    }
    if (errorMessage.length > 0) {
      item.classList.add("error");
      errorElement.classList.remove("hidden");
      errorElement.textContent = errorMessage.slice(-1);
    } else if (errorMessage.length === 0) {
      item.classList.remove("error");
      errorElement.classList.add("hidden");
    }
  }

  if (!hasErrors) {
    const dateInput = new Date(year.value, month.value - 1, day.value);
    function dateDiff(inputDate, currDate) {
      let diffYears = currDate.getFullYear() - inputDate.getFullYear();
      let diffMonths = currDate.getMonth() - inputDate.getMonth();
      let diffDays = currDate.getDate() - inputDate.getDate();

      if (diffDays < 0) {
        diffMonths--;
        diffDays += new Date(
          currDate.getFullYear(),
          currDate.getMonth(),
          0
        ).getDate();
      }

      if (diffMonths < 0) {
        diffYears--;
        diffMonths += 12;
      }

      return {
        years: diffYears,
        months: diffMonths,
        days: diffDays,
      };
    }
    const diff = dateDiff(dateInput, date);
    years.textContent = diff.years;
    months.textContent = diff.months;
    days.textContent = diff.days;
  }
});

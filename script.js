"use strict";

const options = document.querySelectorAll("input");

getData("daily");

options.forEach((option) => {
  option.addEventListener("change", () => {
    getData(option.value);
  });
});

function getData(frequency) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => updateUI(data, frequency));
}

function updateUI(array, frequency) {
  array.forEach((type) => {
    //construct ID for searching for elements
    const currentType = type.title.toLowerCase().replace(" ", "");

    //get 'big-number' element and update its content
    document.getElementById(
      currentType
    ).innerText = `${type.timeframes[frequency].current}hrs`;

    //get previous element and update its content
    document.getElementById(
      `prev${currentType}`
    ).innerText = `Last Week - ${type.timeframes[frequency].previous}hrs`;
  });
}

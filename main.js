"use strict";

const bars = document.querySelectorAll(".red-chart");
const wedBar = document.querySelector("#bar-wed");
const hoverChips = document.querySelectorAll(".hover-chip");

const jsonRawData = `[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
`;
const jsonParse = JSON.parse(jsonRawData);

bars.forEach((bar) => {
  bar.addEventListener("mouseenter", (e) => {
    bar.previousElementSibling.style.opacity = "1";
  });
  bar.addEventListener("mouseleave", (e) => {
    bar.previousElementSibling.style.opacity = "0";
  });
  const index = Array.from(bars).indexOf(bar);
  let dataIndex = index;
  if (index >= 2) {
    dataIndex = index + 1;
  }
  if (index <= 5)
    bar.previousElementSibling.textContent = `$${jsonParse[dataIndex].amount}`;
});

wedBar.addEventListener("mouseenter", (e) => {
  wedBar.previousElementSibling.style.opacity = "1";
  wedBar.previousElementSibling.textContent = `$${jsonParse[2].amount}`;
});
wedBar.addEventListener("mouseleave", (e) => {
  wedBar.previousElementSibling.style.opacity = "0";
});

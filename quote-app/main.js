"use strict";

const quoteBtn = document.querySelector(".getBtnqoute");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

const defaultQuote = "We become what we think about.";
const defaultAuthor = "Earl Nightingale";

const setInitialQuote = () => {
  quoteText.innerText = defaultQuote;
  quoteAuthor.innerText = defaultAuthor;
};

const fetchAndDisplayQuote = () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const author = data.author;
      quoteText.innerText = quote;
      quoteAuthor.innerText = author;
    });
};

document.addEventListener("DOMContentLoaded", setInitialQuote);

quoteBtn.addEventListener("click", fetchAndDisplayQuote);

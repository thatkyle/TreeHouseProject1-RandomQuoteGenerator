// array of quotes
const quotes = [
  {
    quote: "Only I can change my life. No one can do it for me.",
    source: "Carol Burnett",
    tag: "motivational"
  },
  {
    quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    source: "St. Jerome",
    year: "4th century AD",
    tag: "self development"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll",
    tag: "inspirational"
  },
  {
    quote: "Change your life today. Don't gamble on the future, act now, without delay.",
    source: "Simone de Beauvoir",
    citation: "The Book of Positive Quotations",
    year: 2007,
    tag: "positive thinking"
  },
  {
    quote: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
    source: "Dale Carnegie",
    citation: "The Leader In You",
    year: 2010,
  },
  {
    quote: "Problems are not stop signs, they are guidelines.",
    source: "Robert H. Schuller",
  },
];

// gets quote object at a random index of the array from 0 to array.length - 1
const getRandomQuote = quotes => {
  return quotes[Math.floor(Math.random() * quotes.length)]
};

// returns random value from 1 to 255
const randRgb = () => Math.floor(Math.random() * 255) + 1;

// changes page body background color to a random rgb color value
const changeBgColor = () => {
  document.body.style.backgroundColor = "rgb("+randRgb()+","+randRgb()+","+randRgb()+")";
}

// renders quote to screen and calls function to change body background color
const printQuote = () => {
  // call helper functions to change body bg color and get quote from array
  changeBgColor();
  let quote = getRandomQuote(quotes);
  // form html string to render quote object
  let quoteHtml = `<p class="quote"> ${quote.quote} </p>
                   <p class="source"> ${quote.source}`;
  // if citation, year, tag property exists on quote object, add it to the html
  if (quote.citation) {
    quoteHtml += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    quoteHtml += `<span class="year"> ${quote.year} </span>`;
  }
  if (quote.tag) {
    quoteHtml += `<span class="tags">, tag: ${quote.tag} </span>`
  }
  quoteHtml += `</p>`;
  // set element with id quote-box's innerHTML to quoteHtml to render quote view
  document.getElementById('quote-box').innerHTML = quoteHtml;
}

// after page loads, load a random initial quote and background color,
// then auto-refresh the quote and background color every 6 seconds
window.onload = () => {
  printQuote();
  setInterval(() => printQuote(), 6000);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

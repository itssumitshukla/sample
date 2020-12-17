
let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter_but');
let newQuote = document.getElementById('new-quote');



// Get quote from api
async function getQuote(){
  const proxyUrl = 'http://api.allorigins.win/get?url=';
  let apiUrl ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    let response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    let data = await response.json();
    const quoteObj = JSON.parse(data.contents);
    //if author is blank
    if(quoteObj.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = quoteObj.quoteAuthor;
    }
    //reduce fontsize for long quote
    if(quoteObj.quoteText.length > 120 ){
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = quoteObj.quoteText;
    console.log(quoteObj)
  } catch (err) {
    getQuote();
    console.log(`Whoops no quote and the error is ${err}`);
  }
}

//on load
getQuote();
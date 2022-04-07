// document.querySelector('button');
// document.querySelector('.new-quote button');
// const quoteButton document.querySelector('#js-new-quote');

// look for a event to happen

async function getQuote(){
console.log("quote button was clicked");
try{
  const response = await fetch(endpoint);
  if(!response.ok){

    throw Error (response.statusText)
         setData(data);
    }

    const json= await response.json();
    console.log(json);
    displayQuote(json.content);
    displayAuthor(json.author);
  } catch (err){

    console.log(err);
    alert('failed');

  }
}
function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
function displayAuthor(quote){
  const quoteText = document.querySelector('#js-quote-author');
  quoteText.textContent = quote;
}

//https://random-quote-generator.herokuapp.com/api/quotes/random
// https://catfact.ninja/fact
const endpoint = 'https://api.quotable.io/random ';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);


// assingment 12
//change .fact
// change endpoint
//change the css
// what is your extentsion

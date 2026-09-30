let quote = document.getElementById('quote');
let autor = document.getElementById('autor');

console.log(quote);
console.log(autor);

async function getQuote() {
    try {

        let result = await fetch ('https://dummyjson.com/quotes/random');

        let data = await result.json();

        console.log(data);

        quote.innerHTML = data.quote;
        author.innerHTML = data.author;

    } catch (error) {
        console.log("Error : " + error);
    }
}
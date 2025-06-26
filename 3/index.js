const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world canthrow at you.",
    "Believe you can and you're halfway there.",
    "The future depends on what you do today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The only impossible journey is the one you never begin.",
    "In the end, we only regret the chances we didn't take.",
    "Life is either a daring adventure or nothing at all.",
    
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size === quotes.length) {
        // If all quotes have been used, reset the set
        usedIndexes.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
    
        // Check if the index has already been used
        if (usedIndexes.has(randomIdx)) {
            continue; // If used, generate a new index
        }
        // If not used, add it to the set and break the loop
        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        // If all quotes have been used, reset the set
        break;

    }
   
}
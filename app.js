//CHANGING TO RANDOM COLORS
function randomRGB() {
    const r = Math.floor(Math.random() * 256) //In order to get 255, you have to multiply by 256 then ignore any decimals after the the whole number
    const g = Math.floor(Math.random() * 256) //In order to get 255, you have to multiply by 256 then ignore any decimals after the the whole number
    const b = Math.floor(Math.random() * 256) //In order to get 255, you have to multiply by 256 then ignore any decimals after the the whole number
    return `rgb(${r}, ${g}, ${b})`
} 

//CHANGING COLORS
const h1 = document.querySelector('h1'); //Select h1's
setInterval(function () {
    h1.style.color = randomRGB(); // All h1's change colors usins the RGB function
}, 850)//Make it animated, or over a set interval

//SELECTING ALL THE LETTERS INDIVIDUALLY
const letters = document.querySelectorAll('.letter');

//Make the letters change over 5 second intervals 
const intervalId = setInterval(function () {
    //LOOPING OVER EACH LETTER
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);

// clearInterval(intervalId); //This is how you stop the looping of setInterval



  

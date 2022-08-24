const dice = document.getElementById('dice');
const getQuote = () => {
    const adveice_paragraph = document.getElementById('advice');
    const adviceID = document.getElementById('adviceId');
    const id = Math.floor(Math.random()*100)
    const API = `https://api.adviceslip.com/advice/${id}`;
        fetch(API)
        .then((response) => response.json() )
        .then((data) => {
            const advice = data.slip.advice;
            adveice_paragraph.innerHTML = advice;
            adviceID.innerHTML = id;
            
        })
        .catch((error) => console.log(error))   
}

window.onload = getQuote();
dice.addEventListener('click', getQuote)
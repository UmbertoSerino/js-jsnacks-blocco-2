// Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante
const buttonStartElement = document.querySelector("button.start-time");
const buttonStopElement = document.querySelector("button.end-time");
const counterElement = document.querySelector("span.count");

let startTimer;

buttonStartElement.addEventListener("click", function (){

    startTimer = setInterval (function() { 

        counterElement.innerHTML = parseInt(counterElement.innerHTML, 10) + 1;

    }, 1000);
})

buttonStopElement.addEventListener("click", function(){
    clearInterval(startTimer);

});


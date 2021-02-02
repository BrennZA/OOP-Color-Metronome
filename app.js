const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tempo = form.elements.tempo.value;
    const note = form.elements.note.value;
    updateDisplay(tempo, note);
});


const updateDisplay = function(tempo, note) {
    const tempoDisplay = document.querySelector("#metronomeDisplay__tempo > span");
    tempoDisplay.innerText = tempo;
    const noteDisplay = document.querySelector("#metronomeDisplay__note > span");
    noteDisplay.innerText = note;
}
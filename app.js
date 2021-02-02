const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tempo = form.elements.tempo.value;
    const note = form.elements.note.value;
});
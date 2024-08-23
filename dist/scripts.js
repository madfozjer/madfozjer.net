function madfoz_hover(event) {
    event.target.innerText = "mitri di fozjer";
}

function madfoz_leave(event) {
    setTimeout (() => {
        event.target.innerText = "madfoz";
    }, 50);
}
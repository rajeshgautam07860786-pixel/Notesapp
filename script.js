function saveNote() {
    const note = document.getElementById("note").value;

    if (note.trim() === "") {
        alert("Please write a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";
    showNotes();
}

function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let output = "";

    notes.forEach((n) => {
        output += `<div class="note">${n}</div>`;
    });

    document.getElementById("notes").innerHTML = output;
}

showNotes();

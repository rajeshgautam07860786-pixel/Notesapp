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

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let output = "";

    notes.forEach((n, index) => {
        output += `
        <div class="note">
            <p>${n}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        </div>
        `;
    });

    document.getElementById("notes").innerHTML = output;
}

showNotes();

function saveNote() {
    const note = document.getElementById("note").value;

    if (note.trim() === "") {
        alert("Please write a note!");
        return;
    }
    
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({
    text: note,
    date: new Date().toLocaleString()
});
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";
    showNotes();
}


function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    trash.push(notes[index]);
    localStorage.setItem("trash", JSON.stringify(trash));

    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
}

function deleteAllNotes() {
    if (confirm("Are you sure you want to delete all notes?")) {

        let notes = JSON.parse(localStorage.getItem("notes")) || [];

        trash = trash.concat(notes);
        localStorage.setItem("trash", JSON.stringify(trash));

        localStorage.removeItem("notes");
        showNotes();
    }
}
function undoDelete() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let trash = JSON.parse(localStorage.getItem("trash")) || [];

    if (trash.length === 0) {
        alert("Trash is empty!");
        return;
    }

    notes.push(trash.pop());

    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trash", JSON.stringify(trash));

    showNotes();
}
function editNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    
    const updatedNote = prompt("Edit your note:", notes[index]. text);

    if (updatedNote !== null && updatedNote.trim() !== "") {
        notes[index].text = updatedNote;
notes[index].date = new Date().toLocaleString();
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
    }
}


function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let output = "";

    notes.forEach((n, index) => {
        output += `
        <div class="note">
             <p>${n.text}</p>
<small>${n.date}</small>
            <button onclick="editNote(${index})">Edit</button>
<button onclick="deleteNote(${index})">Delete</button>
        </div>
        `;
    });

    document.getElementById("notes").innerHTML = output;
}

showNotes();

function searchNotes() {
    const search = document.getElementById("search").value.toLowerCase();
    const notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        const text = note.innerText.toLowerCase();

        if (text.includes(search)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
}
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Page load hone par theme restore karo
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
        }

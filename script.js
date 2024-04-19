const notecontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notecontainer.innerHTML = savedNotes;
    }
}

function updateStorage() {
    localStorage.setItem("notes", notecontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = ""; // Initialize with empty text
    const img = document.createElement("img");
    img.src = "delete.png";
    notecontainer.appendChild(inputBox);
    inputBox.appendChild(img);
    updateStorage(); // Save the updated content to local storage when adding a new note
});

notecontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Save the updated content to local storage when deleting a note
    }
});

notecontainer.addEventListener("keyup", () => {
    updateStorage(); // Save the updated content to local storage when typing in a note
});

showNotes();

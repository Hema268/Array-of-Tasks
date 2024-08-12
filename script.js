document.getElementById('add').addEventListener('click', addNotes);
document.getElementById('userinput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNotes();
    }
});

function addNotes() {
    const userInput = document.getElementById('userinput');
    const notesList = document.getElementById('notesfile');
    const inputValue = userInput.value.trim();

    if (inputValue !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';  
        removeButton.addEventListener('click', () => {
            notesList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        notesList.appendChild(listItem);

        userInput.value = ""; // Clear the input field after adding the note
    }
}

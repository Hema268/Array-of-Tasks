let userInput= document.getElementById('userinput');
let add= document.getElementById('add');
let noteslist= document.getElementById('notesfile');

function addNotes(){
    let inputField = userInput.value.trim();
    if (inputField != ""){
        let list  = document.createElement('li');
        list.textContent = userInput.value.trim();
        noteslist.appendChild(list);
        console.log(userInput.value)
        }
    
}
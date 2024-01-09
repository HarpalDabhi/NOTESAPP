const notesContainer = document.getElementsByClassName('notes-container')[0];

const createNote = document.getElementById('createNote');

let notes = document.querySelectorAll('.input-box');
let img;

function ShowNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
};

ShowNotes();

function UpdateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML);
};

createNote.addEventListener('click',() => {

    let inputBox = document.createElement('p');
    img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'remove.png';
    img.className ="img";
    notesContainer.appendChild(inputBox).appendChild(img);

});


notesContainer.addEventListener('click',(e) => {

  if(e.target.className=='img'){
    e.target.parentElement.remove();
    UpdateStorage();
  } else if (e.target.className == 'input-box') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach( note =>{
            note.onkeyup = function(){
                UpdateStorage();
            }
        })
  }

});

document.addEventListener('keydown',(e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
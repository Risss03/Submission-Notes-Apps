import './component/index.js';
import  notesData from "./data/data.js";

document.addEventListener('DOMContentLoaded', () => {
    home();
})
  
          // Function to display notes
          function displayNotes() {
              const noteList = document.getElementById('noteList');
              noteList.innerHTML = '';
              notesData.forEach(note => {
                  const noteItem = document.createElement('div');
                  noteItem.innerHTML = `
                      <h3>${note.title}</h3>
                      <p>${note.body}</p>
                  `;
                  noteList.appendChild(noteItem);
              });
          }
  
          // Call displayNotes function when page loads
          displayNotes();
  
          // Function to add a new note
          const noteForm = document.getElementById('noteForm');
          noteForm.addEventListener('submit', function(event) {
              event.preventDefault();
              const title = document.getElementById('noteTitle').value;
              const body = document.getElementById('noteBody').value;
              const newNote = { id: notesData.length + 1, title, body };
              notesData.push(newNote);
              displayNotes();
              noteForm.reset();
          });
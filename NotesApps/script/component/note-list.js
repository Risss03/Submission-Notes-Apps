import notesData from "../data/data.js";

class NoteList extends HTMLElement {
    connectedCallback() {
        this.render();
        document.addEventListener('noteAdded', this.render.bind(this));
    }
  
    render() {
        this.innerHTML = `
            <section id="noteList" class="grid-container"></section>
        `;
        const noteList = this.querySelector('#noteList');
        notesData.forEach(note => {
            const noteItem = document.createElement('noteItem');
            noteItem.note = note;
            noteList.appendChild(noteItem);
        });
    }
}


customElements.define('note-list', NoteList);

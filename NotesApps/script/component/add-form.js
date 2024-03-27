import notesData from "../data/data.js";

class AddForm extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <form id="noteForm">
                <label for="noteTitle">Judul:</label>
                <input type="text" id="noteTitle" name="noteTitle" required>
                <label for="noteBody">Isi:</label>
                <textarea id="noteBody" name="noteBody" rows="4" required></textarea>
                <button type="submit">Add Note</button>
            </form>
            `;
            this.querySelector('#noteForm').addEventListener('submit', this.addNote.bind(this));
    }

    addNote(event) {
        event.preventDefault();
        const title = this.querySelector('#noteTitle').value;
        const body = this.querySelector('#noteBody').value;
        if (title && body) {
          const newNote = {
            id: `note-${Date.now()}`,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false
          };
          notesData.push(newNote);
          document.dispatchEvent(new CustomEvent('noteAdded', { detail: newNote }));
          event.target.reset();
        }
      }

    updateStyle() {
        this._style.textContent = `
          :host {
            display: inline;
            color: black;
          }

          label {
            color: black;
          }
          button {
            border: 0;
            padding-inline: 24px;
            background-color: cornflowerblue;
     
            text-transform: camelCase;
            font-size: 1rem;
            color: white;
     
            cursor: pointer;
     
            transition: 100ms linear;
          }
        `;
    }
}

customElements.define('add-form', AddForm);


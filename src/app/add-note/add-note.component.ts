import { Component } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
   showAddNotePage = false;
   noteHeading = '';
   noteText = '';

   saveNote() {
     this.showAddNotePage = false;
     this.noteHeading = '';
     this.noteText = '';
   }
}

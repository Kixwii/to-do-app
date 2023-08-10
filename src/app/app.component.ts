import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  constructor(private service:SharedService){}


    notes:any=[];

    refreshNotes(){
      this.service.getNotes().subscribe((res)=>{
        this.notes=res;
      })
    }

    ngOnInit(){
      this.refreshNotes();
    }

addNotes(newNotes:string){
  this.service.addNote(newNotes).then((res)=>{ 
    console.log(res);
    this.refreshNotes();
  })
}

deleteNotes(id:string){
  this.service.addNote(id).then((res) =>{
    console.log(res);
    this.refreshNotes();
  })
}

  
}

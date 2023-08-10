import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';
import { AddNoteComponent } from './add-note/add-note.component';

const firebaseConfig = {
  apiKey: "AIzaSyDXYVm7vCkhumSXh3YQGY_Y5ekwUHEt6Og",
  authDomain: "to-do-app-4f203.firebaseapp.com",
  projectId: "to-do-app-4f203",
  storageBucket: "to-do-app-4f203.appspot.com",
  messagingSenderId: "476237332895",
  appId: "1:476237332895:web:85b964b33416d8322d3daa",
  measurementId: "G-YM6C9HQPVJ"
};


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

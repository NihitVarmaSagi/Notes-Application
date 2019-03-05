import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotesComponent } from './notes/notes.component';
import {Router, Routes, RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { config } from 'rxjs';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NoteTextFilterPipe } from './shared/note-text-filter.pipe';


const appRoutes : Routes = [
    {
      path:'notes',
      component:NotesComponent
    },
    {
      path:'',
      component:NotesComponent,
      pathMatch:'full'
    },
    {
      path:'feedback',
      component:FeedbackComponent
    },
    {
      path:"**",
      component:NotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotesComponent,
    NotFoundComponent,
    FeedbackComponent,
    NoteTextFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavComponent } from './nav/nav.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookComponent,
    BookdetailsComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

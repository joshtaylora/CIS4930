import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'march15lecture';
  ary=[1];
  constructor() {}

  AddBook() {
    this.ary.push(1);
  }
}

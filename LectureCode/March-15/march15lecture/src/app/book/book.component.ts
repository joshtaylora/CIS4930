import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor() {}

  title = 'march15lecture';

  bookTitle: string = '';
  author: string = '';

  btnDisabled: boolean = true;

  btnClass:string = "";

  errorStatus:string="";
  errorOccurred:boolean;

  enteredName:string="";

  numberPages: number = 0;

  btnSuccess:boolean;

  ngOnInit(): void {
    this.bookTitle = 'Sherlock Holmes';
    this.author = 'Sir. Arthur Conan Doyle';
    this.btnDisabled = true;
    this.btnClass = 'btn-warning';
    this.errorStatus = 'noshow';
    this.errorOccurred = false
    this.enteredName = '';
    this.numberPages = Math.round(1 * Math.random());
    this.btnSuccess = true;
    setTimeout(() => {
      this.btnDisabled = false;
    }, 10000);
  }

  getBookTitle(): string {
    return this.bookTitle;
  }
  btnChangeColor() {
    if (this.btnClass === 'btn-warning') {
      this.btnClass = 'btn-dark';
    } else {
      this.btnClass = 'btn-warning';
    }
  }

  makeError() {
    this.errorOccurred = true;
  }

  clearError() {
    this.errorOccurred = false;
  }

  isNumPagesEven() {
    return this.numberPages % 2 === 0;
  }

  getCardClass() {
    return this.isNumPagesEven? '#a89984':'#ebdbb2';
  }
}

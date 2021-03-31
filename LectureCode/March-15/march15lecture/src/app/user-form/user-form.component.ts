import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor() { }

  model = new User('admin', 'Josh', 'Taylor', 'JoshuaTaylorA@gmail.com', 'n28)0923^$(AnmdUo}p|');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }


}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/Help', pathMatch: 'full'
  },
  {
    path: 'User',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    EditUsersComponent,
    UsersListComponent
  ],
  exports: [
    EditUsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module,
    UsersRoutingModule
  ]
})
export class UsersModule { }

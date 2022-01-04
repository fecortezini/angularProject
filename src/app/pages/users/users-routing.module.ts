import { EditUsersComponent } from './edit-users/edit-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'editar/:id',
    component: EditUsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

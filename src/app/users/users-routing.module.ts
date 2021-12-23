import { EditUsersComponent } from './edit-users/edit-users.component';
import { AuthsGuard } from './../guards/guards.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'users', component: UsersListComponent,
  canActivate: [AuthsGuard]},

  { path: 'users/editar/:id', component: EditUsersComponent,
  canActivate: [AuthsGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

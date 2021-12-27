import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './register/cadastro.component';
import { LoginComponent } from './login/login.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AuthsGuard } from '../guards/guards.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [



  { path: 'users', component: UsersListComponent,
  canActivate: [AuthsGuard]},

  { path: 'users/editar/:id', component: EditUsersComponent,
  canActivate: [AuthsGuard]},

  { path: 'catalogo', component: CatalogComponent ,
  canActivate: [AuthsGuard]},

  { path: 'catalogo/viewer/:title', component: ContentViewerComponent , canActivate: [AuthsGuard]},

  { path: 'login', component: LoginComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'home', component: HomeComponent,
  canActivate: [AuthsGuard] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

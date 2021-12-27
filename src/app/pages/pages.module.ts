import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './register/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EditContentComponent } from './edit-content/edit-content.component';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';


@NgModule({
  declarations: [
    EditUsersComponent,
    UsersListComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    CatalogComponent,
    EditContentComponent,
    ContentViewerComponent
  ],
  exports: [
    EditUsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    PagesRoutingModule
]
})
export class PagesModule { }

import { UsersModule } from './users/users.module';
import { HttpInterceptorProviders } from './http-interceptors';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './register/cadastro.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      HomeComponent,
      CadastroComponent,
      CatalogComponent
   ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

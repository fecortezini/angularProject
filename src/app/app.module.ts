import { HttpInterceptorProviders } from './http-interceptors';
import { AnimesComponent } from './animes/animes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component'

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      AnimesComponent,
      HomeComponent,
      CadastroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

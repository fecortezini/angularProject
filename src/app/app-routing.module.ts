import { CadastroComponent } from './cadastro/cadastro.component';
import { AnimesComponent } from './animes/animes.component';
//import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsGuard } from './guards/guards.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home',
  component: HomeComponent, canActivate:[AuthsGuard] },
  { path: 'catalogo', loadChildren: () => import('./animes/animes.module')
  .then((m) => m.AnimesModule), canActivate:[AuthsGuard]},
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
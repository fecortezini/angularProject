//import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [



  // { path: 'usuarios', component: UsuariosComponent,
  // canActivate: [AuthsGuard]},

  // { path: 'editar', component: EditarComponent,
  // canActivate: [AuthsGuard]},
  // { path: '**', redirectTo: '/home' },

  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

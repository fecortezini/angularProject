import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsGuard } from './guards/guards.guard';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/register/cadastro.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthsGuard]
  },
  {
    path: 'users',
    canActivate: [AuthsGuard],
    loadChildren: () => import('./pages/users/users.module')
    .then(m => m.UsersModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalog/catalog.module')
    .then(m => m.CatalogModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

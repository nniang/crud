import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './component/categorie/categorie.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { ProduitComponent } from './component/produit/produit.component';
import { RegisterComponent } from './component/register/register.component';
import { UsersComponent } from './component/users/users.component';
// import {DashboardComponents} from './component/dashboards/dashboards.component'
const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component:LoginComponent },
  {path: 'dashboard' , component:DashboardComponent },
  {path: 'register' , component:RegisterComponent },
   {path: 'users' , component:UsersComponent },
   {path: 'produit' , component:ProduitComponent },
   {path: 'categorie' , component:CategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

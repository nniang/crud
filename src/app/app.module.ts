import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// import { DashboardsComponent } from './component/dashboards/dashboards.component';
import { UsersComponent } from './component/users/users.component';
import { ProduitComponent } from './component/produit/produit.component';
import { CategorieComponent } from './component/categorie/categorie.component';
// import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    // DashboardsComponent,
    UsersComponent,
    ProduitComponent,
    CategorieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    // SidebarModule.forRoot()
    // BrowerAnimations//

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

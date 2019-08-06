import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CanvasJS} from 'canvasjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { AuthentCreateComponent } from './components/authent/authent-create/authent-create.component';
import { LoginComponent } from './components/authent/login/login.component';
import { AuthClientPageComponent } from './components/pages/auth-client-page/auth-client-page.component';
import { AuthCreatePageComponent } from './components/pages/auth-create-page/auth-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    NavbarComponent,
    GraphiqueComponent,
    AuthentCreateComponent,
    LoginComponent,
    AuthClientPageComponent,
    AuthCreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

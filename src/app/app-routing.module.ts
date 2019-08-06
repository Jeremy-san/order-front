import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { GraphiqueComponent } from './components/graphique/graphique.component';
import { AuthClientPageComponent } from './components/pages/auth-client-page/auth-client-page.component';
import { AuthentCreateComponent } from './components/authent/authent-create/authent-create.component';

const routes: Routes = [
  {
    path: 'order',
    component: OrderFormComponent
  },
  {
    path: 'graphique',
    component: GraphiqueComponent
  },
  {
    path: 'authClientPage',
    component: AuthClientPageComponent
  },
  {
    path: 'createClientPage',
    component: AuthentCreateComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

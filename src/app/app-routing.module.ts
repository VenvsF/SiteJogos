import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/containers/home/home.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/containers/footer/footer.component';
import { HeaderComponent } from './home/containers/header/header.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

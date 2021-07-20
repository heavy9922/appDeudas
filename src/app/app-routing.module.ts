import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/component/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/component/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/component/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listCosts',
    loadChildren: () =>
      import('./pages/component/list-costs/list-costs.module').then(
        (m) => m.ListCostsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

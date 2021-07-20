import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCostsComponent } from './list-costs.component';

const routes: Routes = [{ path: '', component: ListCostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCostsRoutingModule { }

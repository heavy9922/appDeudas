import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooderComponent } from './fooder.component';

const routes: Routes = [{ path: '', component: FooderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooderRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCostsRoutingModule } from './list-costs-routing.module';
import { ListCostsComponent } from './list-costs.component';
import { HeaderModule } from 'src/app/shared/component/header/header.module';


@NgModule({
  declarations: [
    ListCostsComponent,
  ],
  imports: [
    CommonModule,
    ListCostsRoutingModule,
    HeaderModule
  ]
})
export class ListCostsModule { }

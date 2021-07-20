import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooderComponent } from './shared/component/fooder/fooder.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { HeaderModule } from './shared/component/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    FooderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

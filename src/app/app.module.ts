import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PractiseComponent } from './PractiseComponent';
import { PractiseServiceComponent } from './service';
//import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    PractiseComponent,
   // MatDividerModule
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  // ezekból az osztályokról csinál egy pédányt a háttérben
  providers: [
    PractiseServiceComponent,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }

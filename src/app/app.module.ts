import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PractiseComponent } from './PractiseComponent';
import { PractiseServiceComponent } from './service';
import {HeaderComponent} from "./header";
import {LoginIndexComponent} from "./component/login-index";
import {IndexSoftwareEnginerComponent} from "./component/software-enginer/index-software-enginer";
import {IndexModalComponent} from "./component/software-enginer/index-modal";
import {oldZHComponent} from "./component/software-enginer/old-zh";
import { RouterModule } from '@angular/router';
import {complexComponent} from "./component/software-enginer/complex";
import {degreeWorkComponent} from "./component/software-enginer/degree-work";
import {educationComponent} from "./component/software-enginer/education";
import {linksComponent} from "./component/software-enginer/links";


@NgModule({
  declarations: [
    AppComponent,
    PractiseComponent,
    HeaderComponent,
    LoginIndexComponent,
    IndexSoftwareEnginerComponent,
    IndexModalComponent,
    oldZHComponent,
    complexComponent,
    degreeWorkComponent,
    educationComponent,
    linksComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],

  providers: [
    PractiseServiceComponent,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }

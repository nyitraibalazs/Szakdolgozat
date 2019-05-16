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
import {PdfViewerModule} from "ng2-pdf-viewer";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {miea1Component} from "../assets/EA/MIea1";
import {modalComponent} from "./component/software-enginer/modal";
import {Zh2Component} from "./Zh2Component";
import {navbarGeneratorComponent} from "./generator-navbar";
import {PractiseZh2ServiceComponent} from "./zh2.service";
import {alpotComponent} from "./AlpotComponent";
import {alpotServiceComponent} from "./Alpot.service";
import {vizsgaServiceComponent} from "./vizsga.service";
import {vizsgaComponent} from "./vizsgaComponent";

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
    linksComponent,
    miea1Component,
    modalComponent,
    Zh2Component,
    navbarGeneratorComponent,
    alpotComponent,
    vizsgaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],

  providers: [
    PractiseServiceComponent,
    PractiseZh2ServiceComponent,
    alpotServiceComponent,
    vizsgaServiceComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }

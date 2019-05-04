import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { AppComponent } from './app.component';
import { PractiseComponent } from './PractiseComponent';
import {LoginIndexComponent} from "./component/login-index";
import {oldZHComponent} from "./component/software-enginer/old-zh";
import {IndexSoftwareEnginerComponent} from "./component/software-enginer/index-software-enginer";
import {complexComponent} from "./component/software-enginer/complex";
import {degreeWorkComponent} from "./component/software-enginer/degree-work";
import {educationComponent} from "./component/software-enginer/education";
import {linksComponent} from "./component/software-enginer/links";

const routes: Routes = [
  {
    path: '',
    component: IndexSoftwareEnginerComponent
  },
  {
    path: 'zh',
    component: PractiseComponent
  },
  {
    path: 'old-zh',
    component: oldZHComponent
  },
  {
    path: 'complex',
    component: complexComponent
  },
  {
    path: 'degree-work',
    component: degreeWorkComponent
  },
  {
    path: 'education',
    component: educationComponent
  },
  {
    path: 'links',
    component: linksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

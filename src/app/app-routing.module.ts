import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { AppComponent } from './app.component';
import { PractiseComponent } from './PractiseComponent';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },

  {
    path: 'practise',
    component: PractiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

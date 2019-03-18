import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcFormComponent } from './calc-form/calc-form.component';
import { HomeComponent } from './home/home.component';
import { InputdataDetailComponent } from './inputdata-detail/inputdata-detail.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'calc-form', component: CalcFormComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: InputdataDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CalcFormComponent,
                                  HomeComponent,
                                  InputdataDetailComponent]

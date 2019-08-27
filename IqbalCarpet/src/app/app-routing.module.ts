import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carpet1Component } from './carpet1/carpet1.component';
import { Carpet2Component } from './carpet2/carpet2.component';
import { Carpet3Component } from './carpet3/carpet3.component';
import { Carpet4Component } from './carpet4/carpet4.component';

const routes: Routes = [
  {path:'carpet1', component:Carpet1Component},
  {path:'carpet2', component:Carpet2Component},
  {path:'carpet3', component:Carpet3Component},
  {path:'carpet4', component:Carpet4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =
[
  Carpet1Component,
  Carpet2Component,
  Carpet3Component,
  Carpet4Component
]
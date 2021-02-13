import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPlacesComponent } from "./list-of-places.component";

const routes: Routes = [
  {
    path:'',
    component:ListOfPlacesComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfPlacesRoutingModule { }

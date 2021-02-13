import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlacesComponent } from "./add-places.component";

const routes: Routes = [
  {
    path:'',
    component:AddPlacesComponent,
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlacesRoutingModule { }

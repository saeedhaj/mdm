import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfPlacesRoutingModule } from './list-of-places-routing.module';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from "@angular/forms";
import { ListOfPlacesComponent } from "./list-of-places.component";

 const MATERIAL_MODULE=[
  MatTableModule,   
 ]


@NgModule({
  declarations: [ListOfPlacesComponent],
  imports: [
    CommonModule,
    ListOfPlacesRoutingModule,

    FormsModule,
    ... MATERIAL_MODULE
    


    
  ]
})
export class ListOfPlacesModule { }

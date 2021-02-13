import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlacesComponent } from "./add-places.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPlacesRoutingModule } from './add-places-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULE=[
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule
];

 
@NgModule({
  declarations: [AddPlacesComponent],
  imports: [
    CommonModule,
    AddPlacesRoutingModule,
    ... MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
    


  ]
})
export class AddPlacesModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { PLACES_FORM } from "./places-form";

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.scss']
})
export class AddPlacesComponent implements OnInit {
 placesForm:FormGroup=PLACES_FORM.create()
  statePlaces:string='';
  cityPlaces:string='';
  alleyPlaces:string='';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   if(this.placesForm.valid){
   console.log(this.placesForm.getRawValue())
}
  }
}

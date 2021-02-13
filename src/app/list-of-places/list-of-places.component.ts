import { Component, OnInit } from '@angular/core';

interface ItemListPlacesInterface{
  state:string;
  city:string;
  alley:string;
}
class ItemListModel implements ItemListPlacesInterface{
  state='';
  city='';
  alley='';

constructor(
  state:string,
  city:string,
  alley:string,
){
  this.state=state;
  this.city=city;
  this.alley=alley
}
}




@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.scss']
})
export class ListOfPlacesComponent implements OnInit {

  items: ItemListPlacesInterface[]=[
    new ItemListModel('تهران','ری','سالم'),
    new ItemListModel('تهران','ری','سالم'),
    new ItemListModel('تهران','ری','سالم'),
    new ItemListModel('تهران','ری','سالم'),
    new ItemListModel('تهران','ری','سالم'),
]; 

  
  constructor() { }

  ngOnInit(): void {
  }

}

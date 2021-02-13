import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list-of-places/list-of-places.module').then((m) => m.ListOfPlacesModule),
  },
  {
    path: 'add-places',
    loadChildren: () =>
      import('./add-places/add-places.module').then((m) => m.AddPlacesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

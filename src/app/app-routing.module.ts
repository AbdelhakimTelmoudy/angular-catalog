import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsFormComponent} from "./components/products/products-form/products-form.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductsListComponent} from "./components/products/products-list/products-list.component";


const routes: Routes = [
  {path:"",component:HomeComponent},

  {path:"products",component:ProductsComponent,
    children:[
      {path:"",component:ProductsListComponent },
      {path:"ajouter",component:ProductsFormComponent },
      {path:"modifier",component:ProductsFormComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

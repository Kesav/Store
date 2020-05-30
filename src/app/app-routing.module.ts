import {NgModule} from '@angular/core'
import {Route , RouterModule} from '@angular/router'

import { SearchComponent } from './search/search.component';
import { AddressComponent } from './address/address.component';
import { ErrorComponent } from './error/error.component';

const routes: Route[] = [
    { path:"" , redirectTo:'/search' , pathMatch:"full"},
    { path:"search" , component: SearchComponent},
    { path:"address" , component: AddressComponent},
    { path:"**" , component:ErrorComponent }
]; 

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}
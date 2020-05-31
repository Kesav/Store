import {NgModule} from '@angular/core'
import {Route , RouterModule} from '@angular/router'

import { SearchComponent } from './search/search.component';
import { AddressComponent } from './address/address.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Route[] = [
    { path:"" , redirectTo:'/search' , pathMatch:"full"},
    { path:"search" , component: SearchComponent},
    { path:"address" , component: AddressComponent},
    { path:"settings" , component: SettingsComponent , 
        children: [
            {path:"profile" , component: SettingsProfileComponent},
            {path:"contact" , component: SettingsContactComponent}
        ]},
    { path:"**" , component:ErrorComponent }
]; 

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}
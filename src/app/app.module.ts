import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';
import { ViewModule } from './view/view.module';
import { MyserviceService } from './myservice.service';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressComponent,
    SearchComponent,
    ErrorComponent,
    SettingsComponent,
    SettingsProfileComponent,
    SettingsContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

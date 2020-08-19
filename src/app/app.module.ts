import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CheckAddressTabComponent } from './check-address-tab/check-address-tab.component';
import {metaReducers, reducers} from './ngrx/index';
import { HttpClientModule } from '@angular/common/http';
import { AddressTableComponent } from './address-table/address-table.component';
import { AddresFormComponent } from './addres-form/addres-form.component';
import {AddressTableEffects} from './app.effects'
@NgModule({
  declarations: [
    AppComponent,
    CheckAddressTabComponent,
    AddressTableComponent,
    AddresFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AddressTableEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

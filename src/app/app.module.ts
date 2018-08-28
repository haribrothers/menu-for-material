import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule, routeComponents } from './app.routing.module'
import { DemoMaterialModule } from './material.module'
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import { DxcMenuComponent } from './dxc-menu/dxc-menu.component'
import { DxcMenuItemComponent } from './dxc-menu/dxc-menu-item/dxc-menu-item.component'

import { DxcMenuHeaderItemComponent } from './dxc-menu/dxc-menu-header-item/dxc-menu-header-item.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, DxcMenuComponent, DxcMenuItemComponent, DxcMenuHeaderItemComponent, routeComponents],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';

import { EMO_ROUTES, appRoutingProviders } from './app.routing';

import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';

import { PlantComponent } from './plant/plant.component'; //import the plant module

//import { PlantModule } from './plant/plant.module'; //import the plant module

@NgModule({
  declarations: [ AppComponent, HighlightDirective, TitleComponent, PlantComponent ],
  imports:      [ BrowserModule, EMO_ROUTES ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

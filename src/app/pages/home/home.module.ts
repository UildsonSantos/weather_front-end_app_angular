import { RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ComponentsModule } from './../../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomePage } from './containers/home/home.page';

import { HomeEffects } from './stage/home.effects';
import { homeReducer } from './stage/home.reducer';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';



@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { }

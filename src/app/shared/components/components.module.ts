import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';



@NgModule({
  declarations: [LoaderComponent, DetailedWeatherComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule
  ],
  exports:[LoaderComponent, DetailedWeatherComponent]
})
export class ComponentsModule { }

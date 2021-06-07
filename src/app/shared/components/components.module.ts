import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule
  ],
  declarations: [LoaderComponent],
  exports:[LoaderComponent]
})
export class ComponentsModule { }

import { Component, OnInit, Optional, Self } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { CitiesService } from './../../services/cities.service';
import { CityTypeaheadItem } from './../../models/city-typeahead-item.model';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'uss-cities-typeahead',
  templateUrl: './cities-typeahead.component.html',
  styleUrls: ['./cities-typeahead.component.scss']
})
export class CitiesTypeaheadComponent implements OnInit, ControlValueAccessor {

  dataSource$: Observable<CityTypeaheadItem[]>;
  search: string;

  disabled: boolean;
  loading: boolean;

  private onChange: (value: CityTypeaheadItem) => void;
  private onTouched: () => void;

  constructor(private citiesService: CitiesService,
              @Optional()
              @Self()
              public control: NgControl) {

                control.valueAccessor = this;
  }

  writeValue(obj: any): void {}

  registerOnChange(fn:  (value: CityTypeaheadItem) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.dataSource$ = new Observable(
      (subscriber: Subscriber<string>) => subscriber.next(this.search)
    )
      .pipe(
        switchMap((query: string) => this.citiesService.getCities(query))
      );
  }

  onSelected(match: TypeaheadMatch): void {
    this.onTouched();
    this.onChange(match.item);
  }
}

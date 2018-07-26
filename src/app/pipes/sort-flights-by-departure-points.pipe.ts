import { Pipe, PipeTransform } from '@angular/core';
import {orderBy } from 'lodash';

@Pipe({
  name: 'sortFlightsByDeparturePoints'
})
export class SortFlightsByDeparturePointsPipe implements PipeTransform {

  transform(value: any, prop?: string, order?: string): any {
    return orderBy(value, [prop], order);
  }

}

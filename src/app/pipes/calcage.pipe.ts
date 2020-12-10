import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'



@Pipe({
  name: 'calcage'

})
export class CalcagePipe implements PipeTransform {

  transform(value: number, dob: Date): number {

    return moment().diff(new Date(dob), 'years');
  }

}

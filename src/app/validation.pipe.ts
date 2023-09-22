import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validation',
})
export class ValidationPipe implements PipeTransform {
  transform(value: string | number, type: string): Boolean {
    if (type === 'name') {
      return typeof value === 'string' && value.trim().length >= 2;
    } else if (type === 'number') {
      // console.log(!isNaN(Number(value)));

      // Number() is return number or not if enter 123 o/p 123 but any alphabet o/p NaN (not a number)
      // isNaN check this Number or not if value is number then o/p false otherwise true
      // Number.isInteger(...) it is chk if a value is a integer(whole number) then true otherwise flase
      return (
        !isNaN(Number(value)) &&
        Number.isInteger(Number(value)) &&
        value.toString().length == 10
      );
    }
    return false; // Default to false if type is not recognized.
  }
}

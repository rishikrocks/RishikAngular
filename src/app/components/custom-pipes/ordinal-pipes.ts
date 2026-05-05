import { Pipe, PipeTransform } from '@angular/core';

// 1.⁠ ⁠Create a custom pipe(ordinal) which takes a number as input and returns in ordinal format
//    input : 21,22,23,24  
//    output : 21st, 22nd , 23rd, 24th

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipes implements PipeTransform {
  transform(num: number): string {
      if (num % 10 === 1 && num % 100 !== 11) return num + 'st';
      if (num % 10 === 2 && num % 100 !== 12) return num + 'nd';
      if (num % 10 === 3 && num % 100 !== 13) return num + 'rd';
      return num + 'th';
  }
}

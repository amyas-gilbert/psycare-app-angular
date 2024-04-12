import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    const lettersArray = value.split('');
    const reversedArray = lettersArray.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
  }

}

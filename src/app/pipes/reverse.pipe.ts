import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: object[]): object[] {
    return value.slice().reverse();
  }
}

// FIXME: mak eit functional

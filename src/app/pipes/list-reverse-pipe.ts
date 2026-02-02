import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'listReverse',
})
export class ListReversePipe implements PipeTransform {
  transform<T extends object>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
}

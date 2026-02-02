import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  // serialized 'Viewported' for uniqueness
  readonly viewported = new Set<string>(
    // JSON.stringify({
    //   a: 'HEA',
    //   order: 0,
    // }),
  );
  readonly anchor = signal<Anchor>('header');
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  // SRV
  ////

  readonly anchor = signal<Anchor>('header');
  readonly viewported = signal(new Set<string>()); // serialized Set value for uniqueness
}

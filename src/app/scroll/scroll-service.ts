import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  readonly anchor = signal<Anchor>('header');
  // serialized 'Viewported' for uniqueness
  readonly viewported = signal(new Set<string>());
}

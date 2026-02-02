import { Injectable, signal } from '@angular/core';

import { Store } from '@app/store/store-model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // MODEL
  readonly store = signal(new Store()).asReadonly();
}

import { Injectable, signal } from '@angular/core';

import { Store } from '@app/store/store-model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // MODEL
  private readonly _model = signal(new Store()).asReadonly();

  get store() {
    return this._model;
  }
}

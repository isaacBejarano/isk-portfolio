import { Component } from '@angular/core';

@Component({
  selector: 'app-lgpd',
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.scss'],
})
export class LgpdComponent {
  language = 0;

  constructor() {}

  // mehtods
  close(): void {
    window.close();
  }
  switch(language: number): void {
    this.language = language;
  }
}

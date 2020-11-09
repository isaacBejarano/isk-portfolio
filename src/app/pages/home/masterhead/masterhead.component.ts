import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { store } from '../../../store/store';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent implements OnInit {
  src: string;
  alt: string;
  name: string;
  title: string;
  fireEvent: (eventName: EventEmitter<any>) => void;

  // ALLOW SCROLL only in home.component <-- masterhead.component emit
  @Output() emitedScroll = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.src = store.masterhead.src;
    this.alt = store.masterhead.alt;
    this.name = store.masterhead.name;
    this.title = store.masterhead.title;
    // --> shared methods
    this.fireEvent = store.fireEvent;
    this.fireEvent(this.emitedScroll); // call on init
  }
}

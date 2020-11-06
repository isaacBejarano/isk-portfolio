import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent implements OnInit, OnDestroy {
  src = '../../assets/img/portfolio/Isaac-bejarano-s4.jpg';
  alt = 'Isaac Bejarano photo';
  name = 'Isaac Bejarano';
  title = 'Web Developer - Full Stack - MEAN - LAMP';

  constructor() {}

  // ALLOW SCROLL only in home.component <-- masterhead.component emit
  @Output() emitedScroll = new EventEmitter();

  ngOnInit(): void {
    console.log('OnInit');
    this.fireEvent();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.fireEvent();
  }

  // emmiter method
  fireEvent(): void {
    this.emitedScroll.emit();
  }
}

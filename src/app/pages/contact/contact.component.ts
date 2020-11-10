import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { store } from '../../store/store';
import { Shared } from '../../utils/shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, DoCheck {
  form: FormGroup;
  // --> shared methods
  openLink = Shared.openLink;

  constructor(private fb: FormBuilder) {}

  // hooks
  ngOnInit(): void {
    window.scrollTo(0, 0); // to counter effect JQuery Animation trail
    store.setShow(false); // scroller -> state false
    this.createForm(); // Reactive Formular
  }

  ngDoCheck(): void {
    const scroller = document.getElementById('scroller') as HTMLDivElement;

    // dissable scroller view
    if (!store.scroll.show) {
      scroller.classList.add('d-none'); // state false
    }
  }

  // methods
  createForm(): void {
    const regex = '[a-zA-Z0-9_.-]+@[a-zA-Z0-9._]+.[a-zA-Z0-9]{2,3}$';

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(regex)]],
      msg: ['', [Validators.required, Validators.minLength(15)]],
      lgpd: [false, Validators.requiredTrue],
    });
  }

  submit(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }
}

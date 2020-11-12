import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, DoCheck {
  // prop -> to <app-divider> Input()
  divider = 'divider-dark';

  // .valid class
  validName = `
    !form.get('name').hasError('required') &&
    form.get('name').touched
      ? true
      : false`;
  validEmail = `
    !form.get('email').hasError('required') &&
    form.get('email').touched
      ? true
      : false`;
  validMsg = `
    !form.get('msg').hasError('required') &&
    form.get('msg').touched
      ? true
      : false`;

  contact = store.getContact as object | any;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state false
    this.createForm();
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
      msg: ['', [Validators.required, Validators.minLength(10)]],
      lgpd: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    console.log('validity', this.form.valid);
    console.log(this.form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { store } from '../../store/store';

// Reactive Formular

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  openLink: () => void;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // to counter balance JQuery Animation trail
    this.createForm();
    this.openLink = store.openLink;
  }

  // methods
  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required],
      lgpd: ['', Validators.required],
    });
  }

  submit(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
    console.log(this.form);
  }
}

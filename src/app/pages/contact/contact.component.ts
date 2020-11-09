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
    const regex = '[a-zA-Z0-9_.-]+@[a-zA-Z0-9._]+.[a-zA-Z0-9]{2,3}$'; // qweqwe@wdqds.de

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(regex)]],
      msg: ['', [Validators.required, Validators.minLength(15)]],
      lgpd: [false, Validators.required],
    });
  }

  submit(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }
}

import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, DoCheck {
  divider = 'divider-dark'; // prop -> to <app-divider> Input()
  contact = store.getContact as object | any;
  form: FormGroup;

  constructor(
    //
    private fb: FormBuilder,
    private ApiService: ApiService
  ) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state false
    this.createForm(); // reactive forms

    // this.ApiService.postContacts().subscribe((user) => console.log(user));

    this.ApiService.getSpanishCountries().subscribe((country) =>
      console.log(country)
    );
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
    const regex =
      '[a-z0-9]+([._-]?[a-z0-9]+)*' +
      '@' +
      '[a-z0-9]+([._-]?[a-z0-9]+)*.[a-z]{2,4}';

    this.form = this.fb.group({
      // def value, sync, async (e.g. login)
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(regex)]],
      msg: ['', [Validators.required, Validators.minLength(10)]],
      lgpd: [false, Validators.requiredTrue],
    });
  }

  send(): boolean {
    console.log(this.form);

    // onsubmit
    return !this.form.valid ? false : true;
  }

  // required + specific of each input
  validate(name: string): number {
    const requiredName =
      // invalid-feedback
      this.form.get(name).invalid && this.form.get(name).touched;

    let errors = 0; // valid

    // invalid-feedback
    if (name === 'name') {
      if (requiredName) {
        errors += 1;
      }
      if (
        this.form.get(name).hasError('minlength') &&
        this.form.get(name).touched
      ) {
        errors += 1;
      }
    }

    return errors;
  }
  //
}

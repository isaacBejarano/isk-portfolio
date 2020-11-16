import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';
import { ApiService } from '../../services/api.service';
import { IntContactForm } from '../../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, DoCheck {
  divider = 'divider-dark'; // prop -> to <app-divider> Input()
  contact = store.getContact as object | any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state false
    this.createForm(); // reactive forms
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

  send(): void {
    // onsubmit
    if (this.form.valid) {
      console.log('SUBMITING VALID FORM: ', this.form);

      // const body: IntContactForm = {
      //   submited: this.form.get('submited'),
      //   name: this.form.get('name'),
      //   email: this.form.get('email'),
      //   msg: this.form.get('msg'),
      //   lgpd: this.form.get('lgpd'),
      // };

      // // POST
      // this.apiService
      //   .postOne(body)
      //   .subscribe((user) => console.log('POST', user));
    }
  }

  // required + specific of each input
  validate(ref: any): any {
    let errorType = 0;

    const alias = ref.getAttribute('formControlName');

    // formControlName === 'name'
    if (ref.getAttribute('formControlName') === 'name') {
      console.log('->', alias);

      // conditions
      const required: boolean =
        this.form.get(alias).invalid && this.form.get(alias).touched;

      const minlength: boolean =
        this.form.get(alias).hasError('minlength') &&
        this.form.get(alias).touched;

      // contact.required1
      if (required) {
        errorType += 1; // errorType 1
      }

      // contact.match1
      if (minlength) {
        errorType += 1; // errorType 2
      }
    }

    console.log('errorType', errorType);
    return errorType;
  }
  //
}

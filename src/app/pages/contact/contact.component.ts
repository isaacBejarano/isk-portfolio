import { Component, OnInit, DoCheck } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
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
  submitable = false;
  disabled = false;
  contact = store.getContact as object | any;
  form: FormGroup;

  constructor(
    // dependency injection
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state false
    this.createForm(); // reactive forms
  }

  ngDoCheck(): void {
    // btn submit
    this.submitable = this.form.valid ? true : false;

    // scroller JQuery Easing update
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
      // [def, sync, async]
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(regex)]],
      msg: ['', [Validators.required, Validators.minLength(10)]],
      lgpd: [false, Validators.requiredTrue],
    });
  }

  send(): void {
    // onsubmit
    if (this.form.valid) {
      console.log('SUBMITING...', this.form);

      // DISABLE CIRCULAR FORM OBJECT before HttpClient methods!
      // just by reseting the FormGroup instance, aka form
      const body: any = this.form.reset({
        submited: this.form.get('submited'),
        name: this.form.get('name'),
        email: this.form.get('email'),
        msg: this.form.get('msg'),
        lgpd: this.form.get('lgpd'),
      });

      // POST
      this.apiService
        .postOne(JSON.stringify(body))
        .subscribe((user) => console.log('POST', user));

      // clean form
      this.form.reset();
    } else {
      this.disabled = true; // .btn-danger
      // this.validateAllOnSubmit(this.form);
      return Object.values(this.form.controls).forEach((control) =>
        control.markAsTouched()
      );
    }
  }

  validateOnTouched(ref: HTMLElement): number {
    let errorType = 0; // counter
    const alias = ref.getAttribute('formControlName');

    // condition repertoire
    const controlRequired: boolean =
      this.form.get(alias).invalid && this.form.get(alias).touched;

    const controlMinLength: boolean =
      this.form.get(alias).hasError('minlength') &&
      this.form.get(alias).touched;

    const controlPattern: boolean =
      this.form.get(alias).hasError('pattern') && this.form.get(alias).touched;

    // const min: boolean = ... // OTHER. etc.

    // NAME
    if (alias === 'name') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlMinLength) {
        errorType += 1; // errorType 2
      }
    }

    // EMAIL
    if (alias === 'email') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlPattern) {
        errorType += 1; // errorType 2
      }
    }

    // MSG
    if (alias === 'msg') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }

      if (controlMinLength) {
        errorType += 1; // errorType 2
      }
    }

    // lGPD
    if (alias === 'lgpd') {
      if (controlRequired) {
        errorType += 1; // errorType 1
      }
    }

    // OTHER
    //  if (alias === 'number') { ... } etc.

    return errorType;
  }
  // validateAllOnSubmit(form: FormGroup): void {
  // const forControls = Object.keys(form.controls); // 'name', 'email', 'msg', 'lgpg'

  // for (const key of forControls) {
  //   //
  //   const control = form.get(key);

  //   if (control instanceof FormControl) {
  //     control.markAsTouched({ onlySelf: true });
  //   } else if (control instanceof FormGroup) {
  //     this.validateAllOnSubmit(control); // recursion
  //   }
  // }

  // }
}

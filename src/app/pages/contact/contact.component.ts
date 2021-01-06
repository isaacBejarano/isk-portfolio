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
    // FIXME: remove alert when email in server enabled
    alert(
      'this contact form is still NOT IMPLEMENTED. It will NOT send any message to Isaac Bejarano. That functionality will be available soon.'
    );

    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state:false
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
      console.log(
        '[disable.console.log in production] -> SUBMITING ...',
        this.form.value
      );

      // POST
      this.apiService
        .postOne(this.form.value)
        .subscribe((user) =>
          console.log('[disable.console.log in production] -> POSTED: ', user)
        );
      // this.apiService.postOne(this.form.value).subscribe((user) => user);

      // clean form
      this.form.reset();
      this.disabled = false; // .btn-danger
    } else {
      this.disabled = true; // .btn-danger
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
}

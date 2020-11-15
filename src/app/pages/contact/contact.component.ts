import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';
import { ApiService } from '../../services/api.service';
import { IntfaceContact } from '../../interfaces/contact';

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
    // Don't use name "ApiService" as prop / it shadows ApiService class"
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
    store.setScrollShow = false; // scroller -> state false
    this.createForm(); // reactive forms

    // this.apiService.postContacts().subscribe((user) =>
    //   console.log('lol', user)
    // );

    // this.apiService.getSpanishCountries().subscribe((country) =>
    //   console.log(country)
    // );
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
      const body: IntfaceContact = {
        submited: 'valid',
        name: 'this.form.controls.name',
        email: 'qwe@qwe.er.ok',
        msg: 'qweqeqeqeqw',
        lgpd: true,
      };

      // POST
      this.apiService
        .postOne(body)
        .subscribe((user) => console.log('POST', user));

      // GET
      this.apiService
        .getMany()
        .subscribe((country) => console.log('GET', country));

      // GET/:id
      this.apiService
        .getOne('2')
        .subscribe((country) => console.log('GET/:id', country));

      // PUT/:id
      const wholeObjectBeforePUT = {
        submited: 'valid',
        name: 'this.form.controls.name',
        email: 'qwe@qwe.er.ok',
        msg: 'qweqeqeqeqw',
        lgpd: false, // <-- updated field
      };

      this.apiService
        .putOne('1', wholeObjectBeforePUT)
        .subscribe((country) => console.log('PUT/:id', country));
    }
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

import { AbstractControl } from '@angular/forms';

export interface IntContactForm {
  submited: AbstractControl;
  name: AbstractControl;
  email: AbstractControl;
  msg: AbstractControl;
  lgpd: AbstractControl;
}

import { AbstractControl } from '@angular/forms';

export type IntContactForm = {
  submited: AbstractControl;
  name: AbstractControl;
  email: AbstractControl;
  msg: AbstractControl;
  lgpd: AbstractControl;
};

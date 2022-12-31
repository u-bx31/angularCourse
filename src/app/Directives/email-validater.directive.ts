import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidater]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidaterDirective, multi: true}]
})
export class EmailValidaterDirective implements Validator {

  constructor() { }

  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = control.value as string;
    if(!mailformat.test(value)){
      return{
        invalid : true
      }
    }
    return null;
    
  }

}

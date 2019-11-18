import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(abstractControl: AbstractControl): void {
    const password = abstractControl.get('password').value,
          confirmPassword = abstractControl.get('confirmPassword').value;
    
    if (password !== confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({ matchPassword: true });
    }
  }
}
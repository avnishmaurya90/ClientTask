import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  loginFG: FormGroup;
  submitted: boolean = false;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginFG = this.fb.group({
      emailId: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/
          ),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginFG.valid) {
      this.loginService
        .login(this.loginFG.value.emailId, this.loginFG.value.password)
        .subscribe(
          (response: any) => {
            if (response.status === 200) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('User', JSON.stringify(response.user));
              this.router.navigate(['/user/menu']);
            } else {
              this.message = 'Something went wrong';
            }
          },
          (error) => {
            if (error.status === 400) {
              this.message = 'Incorrect E-Mail or password';
            } else {
              this.message = 'Something went wrong';
            }
          }
        );
    }
  }
}

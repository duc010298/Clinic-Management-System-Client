import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../core/service/authentication.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loginError = false;
  isValidUsername = true;
  isValidPassword = true;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      remember: [true]
    });
  }

  login() {
    this.clearError();
    this.validateInput();
    if (!this.isValidUsername || !this.isValidPassword) {
      return;
    }

    if (!this.isLoading) {
      this.isLoading = true;
      this.authenticationService
        .login(this.loginForm.value)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe(
          () => {
            this.loginError = false;
            this.route.queryParams.subscribe(params =>
              this.router.navigate([params.redirect || '/'], { replaceUrl: true })
            );
          },
          error => {
            this.loginError = true;
          }
        );
    }
  }

  private clearError() {
    this.loginError = false;
    this.isValidUsername = true;
    this.isValidPassword = true;
  }

  private validateInput() {
    if (this.loginForm.value.username === '') {
      this.isValidUsername = false;
    }
    if (this.loginForm.value.password === '') {
      this.isValidPassword = false;
    }
  }
}

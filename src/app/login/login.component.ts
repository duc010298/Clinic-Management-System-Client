import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../core/service/authentication.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showMessageErr = false;
  isLoading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      remember: [true]
    });
  }

  login() {
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
            this.showMessageErr = false;
            this.route.queryParams.subscribe(params =>
              this.router.navigate([params.redirect || '/'], { replaceUrl: true })
            );
          },
          error => {
            this.showMessageErr = true;
          }
        );
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginError: string = '';

  onSubmit() {

    this.userService.userLogin(this.loginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/user/dashboard']);
          this.loginError = '';
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.loginError = 'Invalid username or password.';
        } else {
          this.loginError = 'Something went wrong. Please try again.';
        }
      }
    });

    // const { username, password } = this.loginForm.value;
    // if (this.userService.login(username, password)) {
    //   this.router.navigate(['/user/detail'])
    // } else {
    //   console.log('Invalid login form');
    // }
  }
}

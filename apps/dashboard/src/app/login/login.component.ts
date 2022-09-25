import { Component, OnInit } from '@angular/core';
import { User } from '@starbucks/api-interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'starbucks-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo = { email: 'users@n.com', password: 'pass' };
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser: User = this.form.value;
    if (this.form.invalid) {
      return false;
    } else {
      if (
        inputedUser.email === this.userInfo.email &&
        inputedUser.password === this.userInfo.password
      ) {
        this.router.navigate(['/orders']);
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}

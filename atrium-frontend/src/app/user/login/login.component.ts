import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../user";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loading = false;
  errormessage = '';

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  currentUser: Observable<User>

  userExists = false;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              private  router: Router) {
  }

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  logIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        success => {
          this.authenticationService.loggedIn.next(true);
          this.router.navigate(['/home']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }

}

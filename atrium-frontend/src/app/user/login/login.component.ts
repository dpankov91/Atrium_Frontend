import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';
  currentUser: Observable<User>

  // @ts-ignore
  fieldTextType: boolean;
  userExists = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
              private  router: Router) {
  }

  ngOnInit(): any {
  }

  logIn() {
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.loading = true;

  }
  toggleFieldTextType(): any {
    this.fieldTextType = !this.fieldTextType;
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../user/services/authentication.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    debugger;
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }
}

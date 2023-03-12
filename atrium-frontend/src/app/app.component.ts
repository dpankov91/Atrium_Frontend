import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./user/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atrium-frontend';

  constructor(
    private router: Router, private authService: AuthenticationService){}


}

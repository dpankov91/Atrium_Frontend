import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SessionsService} from "../sessions.service";

@Component({
  selector: 'app-register-session',
  templateUrl: './register-session.component.html',
  styleUrls: ['./register-session.component.scss']
})
export class RegisterSessionComponent implements OnInit {

  sessionForm = new FormGroup({
    name: new FormControl(''),
    procedureId: new FormControl(''),
    participants: new FormControl(''),
    additionalInfo: new FormControl('')
  })

  constructor(private sessionsService: SessionsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveSession() {
    debugger;
    const session = this.sessionForm.value;
    this.sessionsService.createSession(session)
      .subscribe(()   => {
        this.router.navigateByUrl('/sessions');
      });
  }

  goBack() {

  }

}

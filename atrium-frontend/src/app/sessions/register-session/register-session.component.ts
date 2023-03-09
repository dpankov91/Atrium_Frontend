import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-session',
  templateUrl: './register-session.component.html',
  styleUrls: ['./register-session.component.scss']
})
export class RegisterSessionComponent implements OnInit {

  sessionForm = new FormGroup({
    sessionName: new FormControl(''),
    procedure: new FormControl(''),
    participants: new FormControl(''),
    additionalInfo: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveSession() {

  }

  goBack() {

  }

}

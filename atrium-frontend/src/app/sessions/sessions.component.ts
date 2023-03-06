import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

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

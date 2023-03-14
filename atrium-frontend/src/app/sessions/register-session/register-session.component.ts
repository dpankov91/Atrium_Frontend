import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SessionsService} from "../sessions.service";
import {ProceduresService} from "../../procedures/procedures.service";
import {ProcedureModel} from "../../procedures/procedureModel";

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

  allProcedures: ProcedureModel[] = []

  constructor(private sessionsService: SessionsService,
              private proceduresService: ProceduresService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProcedures();
  }

  saveSession() {
    debugger;
    const session = this.sessionForm.value;
    this.sessionsService.createSession(session)
      .subscribe(()   => {
        this.router.navigateByUrl('/sessions');
      });
  }

  async getAllProcedures(): Promise<void> {
    await this.proceduresService.getAllProcedures().then(pLst => {this.allProcedures = pLst});
  }


  goBack() {

  }

}

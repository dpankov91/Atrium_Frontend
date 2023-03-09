import { Component, OnInit } from '@angular/core';
import {ProcedureModel} from "../../procedures/procedureModel";
import {FormControl, FormGroup} from "@angular/forms";
import {ProceduresService} from "../../procedures/procedures.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionsService} from "../sessions.service";
import {SessionModel} from "../sessionModel";

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.scss']
})
export class UpdateSessionComponent implements OnInit {
  session: SessionModel;

  id: number | undefined;

  sessionForm = new FormGroup({
    name: new FormControl(''),
    participants: new FormControl(''),
    additionalInfo: new FormControl('')
  });

  constructor(private sessionsService: SessionsService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(): Promise<void>{
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    await this.sessionsService.getSessionById(this.id)
      .then(sessionFromRest => {
        this.session = sessionFromRest;
      });
    this.setUpForm();
  }

  updateSession() {
    this.session = {
      id: this.session.id,
      name: this.sessionForm.get('name').value,
      procedureId: 1,
      participants: this.sessionForm.get('participants').value,
      additionalInfo: this.sessionForm.get('additionalInfo').value
    }
    this.sessionsService.updateSession(this.session)
      .subscribe(()   => {
        this.router.navigateByUrl('/sessions');
      });
  }

  goBack() {

  }

  setUpForm() {
    this.sessionForm.patchValue({
      name: this.session.name,
      participants: this.session.participants,
      additionalInfo: this.session.additionalInfo,
    });
  }
}

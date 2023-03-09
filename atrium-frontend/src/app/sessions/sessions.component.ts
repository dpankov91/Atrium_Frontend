import { Component, OnInit } from '@angular/core';
import {ProcedureModel} from "../procedures/procedureModel";
import {ProceduresService} from "../procedures/procedures.service";
import {Router} from "@angular/router";
import {SessionModel} from "./sessionModel";
import {SessionsService} from "./sessions.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  allSessions: SessionModel[] = []

  constructor(private sessionsService: SessionsService,
              private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(): Promise<void> {
    await this.sessionsService.getAllSessions().then(sLst => {this.allSessions = sLst});
  }

  goBack() {

  }

  deleteSession(id: number) {
    this.sessionsService.deleteSession(id)
      .subscribe(() => {
        this.refresh();
      });
  }

  goEditSession(session: SessionModel) {
    this.router.navigate(['/update-session/', session.id])
  }
}

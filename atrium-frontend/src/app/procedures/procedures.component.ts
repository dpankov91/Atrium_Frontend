import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProceduresService} from "./procedures.service";
import {ProcedureModel} from "./procedureModel";

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  allProcedures: ProcedureModel[] = []

  constructor(private proceduresService: ProceduresService,
              private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(): Promise<void> {
    await this.proceduresService.getAllProcedures().then(pLst => {this.allProcedures = pLst});
  }

  goBack() {

  }

  deleteProcedure(id: number) {
    this.proceduresService.deleteProcedure(id)
      .subscribe(() => {
        this.refresh();
      });
  }

  goEditProcedure(procedure: ProcedureModel) {
    this.router.navigate(['/update-procedure/', procedure.id])
  }
}

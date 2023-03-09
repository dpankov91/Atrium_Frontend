import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProceduresService} from "../procedures.service";
import {ProcedureModel} from "../procedureModel";

@Component({
  selector: 'app-update-procedure',
  templateUrl: './update-procedure.component.html',
  styleUrls: ['./update-procedure.component.scss']
})
export class UpdateProcedureComponent implements OnInit {

  procedure: ProcedureModel;

  id: number | undefined;

  procedureForm = new FormGroup({
    name: new FormControl(''),
    isCivil: new FormControl(''),
    additionalInfo: new FormControl('')
  });

  constructor(private procedureService: ProceduresService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh(): Promise<void>{
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    await this.procedureService.getProcedureById(this.id)
      .then(procedureFromRest => {
        this.procedure = procedureFromRest;
      });
    this.setUpForm();
  }

  updateSession() {
    this.procedure = {
      id: this.procedure.id,
      name: this.procedureForm.get('name').value,
      additionalInfo: this.procedureForm.get('additionalInfo').value,
      isCivil: this.procedureForm.get('isCivil').value
    }
    this.procedureService.updateProcedure(this.procedure)
      .subscribe(()   => {
        this.router.navigateByUrl('/procedures');
      });
  }

  goBack() {

  }

  setUpForm() {
    this.procedureForm.patchValue({
      name: this.procedure.name,
      isCash: this.procedure.isCivil,
      additionalInfo: this.procedure.additionalInfo,
    });
  }
}

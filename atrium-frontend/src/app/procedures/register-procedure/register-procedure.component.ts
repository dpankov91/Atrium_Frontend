import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProceduresService} from "../procedures.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-procedure',
  templateUrl: './register-procedure.component.html',
  styleUrls: ['./register-procedure.component.scss']
})
export class RegisterProcedureComponent implements OnInit {

  procedureForm = new FormGroup({
    Name: new FormControl(''),
    isCivil: new FormControl(''),
    AdditionalInfo: new FormControl('')
  })

  constructor(private proceduresService: ProceduresService,
              private router: Router) { }

  ngOnInit(): void {

  }

  goBack() {

  }

  saveProcedure() {
    const procedure = this.procedureForm.value;
    this.proceduresService.createProcedure(procedure)
      .subscribe(()   => {
        this.router.navigateByUrl('/home');
      });
  }

}

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

  constructor(private eventService: ProceduresService,
              private router: Router) { }

  ngOnInit(): void {

  }

  goBack() {

  }

  saveProcedure() {
    debugger;
    const procedure = this.procedureForm.value;
    this.eventService.createProcedure(procedure)
      .subscribe(()   => {
        this.router.navigateByUrl('');
      });
  }

}

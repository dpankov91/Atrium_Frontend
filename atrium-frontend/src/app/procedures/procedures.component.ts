import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProceduresService} from "./procedures.service";

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {

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

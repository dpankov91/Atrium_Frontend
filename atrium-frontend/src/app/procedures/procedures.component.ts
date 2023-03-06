import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {

  procedureForm = new FormGroup({
    procedureName: new FormControl(''),
    isCivil: new FormControl(''),
    additionalInfo: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {

  }

  goBack() {

  }

  saveProcedure() {

  }
}

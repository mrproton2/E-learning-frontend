import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';


@Component({
  selector: 'app-addbatchpopup',
  templateUrl: './addbatchpopup.component.html',
  styleUrls: ['./addbatchpopup.component.css']
})
export class AddbatchpopupComponent  implements OnInit {
  addbatchForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

      // Student Details
      this.addbatchForm = this.formBuilder.group({
        batchname: ['', Validators.required],
        status: ['', Validators.required],
        doc: ['', Validators.required],
        fees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      
    });
  }

  closepopup(){
    
  }
}
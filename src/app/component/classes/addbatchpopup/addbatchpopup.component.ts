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
  addbatchForm: FormGroup;
  getdatasubstream:any;
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddbatchpopupComponent>,
    private formBuilder: FormBuilder,
    private service: MasterService, ) {

    }

  ngOnInit() {

      // Student Details
      this.addbatchForm = this.formBuilder.group({
        type: ['Create', Validators.required],
        substream_pk: ['', Validators.required],
        batch_name: ['', Validators.required],
        status: ['', Validators.required],
        doc: ['', Validators.required],
    });

this.getsubstream()

  }

  checkActionType() {
   
    if (this.addbatchForm.value.type == "Update") {
   // this.updatesubstream();
    }
    else if (this.addbatchForm.value.type == "Create") {
     this.addbatch();
    }
    else {
//console.log(this.data.type)
    }
  }
  closepopup(){
    
  }

  addbatch() {
    console.log(this.addbatchForm.value)
    if (this.addbatchForm.valid) {
      this.service.addbatch(this.addbatchForm.value, "Batch/addstream").subscribe(result => {
        this.data = result;
        console.log(this.data)
        confirm('Added Batch successfully')
        this.closepopup();
      })
    } else {
      alert('fail')
    }

  }













  
  getsubstream() {
    debugger
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.getdatasubstream = subStreamnames;

    });
  }
}
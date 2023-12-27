import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
@Component({
  selector: 'app-addstreampop',
  templateUrl: './addstreampop.component.html',
  styleUrls: ['./addstreampop.component.css']
})
export class AddstreampopComponent implements OnInit {
  public addStreamGrp: FormGroup;
  inputdata: any;
  editdata: any;
  selectedDate: Date;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddstreampopComponent>,
    private formbuilder: FormBuilder,
    private service: MasterService,
    private toastr:ToastrService
  ) {
    this.selectedDate = new Date();
  }

  ngOnInit(): void {
    this.addStreamGrp = this.formbuilder.group({
      addstream_pk: [''],
      type: ['Create', Validators.required],
      stream_name: ['', Validators.required],
      status: [''],
      creation_date: ['', Validators.required],
    });

    this.inputdata = this.data;
    console.log(this.data)
    if (this.inputdata.addstream_pk > 0) {
      this.addStreamGrp.patchValue({
        type: this.inputdata.type,
        addstream_pk: this.inputdata.addstream_pk,
        stream_name: this.inputdata.stream_name,
        creation_date: this.inputdata.creation_date,
        status: this.inputdata.status
      })
    }
  }


  checkActionType() {
    if (this.addStreamGrp.value.type == "Update") {
      this.updatestream();
    }
    else if (this.addStreamGrp.value.type == "Create") {
      console.log(this.addStreamGrp.value.type)
      this.addstream()
    }
    else {
      console.log(this.data.type)
    }
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  updatestream() {
    const pk = this.addStreamGrp.getRawValue().addstream_pk;
    if (pk != '' && pk != null) {
      this.service.updatestream(pk, this.addStreamGrp.getRawValue(), "data/update").subscribe(result => {
        confirm('update successfully')
        this.closepopup();
      })
    } else {
      alert('update fails')
    }
  }

  addstream() {
    if (this.addStreamGrp.valid) {
      this.service.addstream(this.addStreamGrp.value, "data/addstream").subscribe(result => {
        this.data = result;
        this.toastr.success('Stream is Created')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form again!')
    }

  }
}





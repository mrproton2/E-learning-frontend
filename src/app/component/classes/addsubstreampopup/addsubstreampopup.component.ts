import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addsubstreampopup',
  templateUrl: './addsubstreampopup.component.html',
  styleUrls: ['./addsubstreampopup.component.css']
})
export class AddsubstreampopupComponent implements OnInit {
  addsubstreamForm: FormGroup;
  tabledata: any;
  streamname: any;
  showOTPVerification: boolean = false;
  selected: string = '';
  dataSource: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddsubstreampopupComponent>,
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    // Student Details
    this.addsubstreamForm = this.formBuilder.group({
      addsubstream_pk: [''],
      type: ['Create', Validators.required],
      stream_pk: ['', Validators.required],
      sub_stream_name: ['', Validators.required],
      status: ['', Validators.required],
      creation_date: ['', Validators.required],
      fees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

    this.tabledata = this.data
    if (this.tabledata.addsubstream_pk > 0) {
      this.addsubstreamForm.patchValue({
        title: this.tabledata.title,
        type: this.tabledata.type,
        addsubstream_pk: this.tabledata.addsubstream_pk,
        select_stream_name: this.tabledata.select_stream_name,
        sub_stream_name: this.tabledata.sub_stream_name,
        fees: this.tabledata.fees,
        creation_date: this.tabledata.creation_date,
        status: this.tabledata.status,
      })
    }
    this.Getstream();

  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  checkActionType() {

    if (this.addsubstreamForm.value.type == "Update") {
      this.updatesubstream();
    }
    else if (this.addsubstreamForm.value.type == "Create") {
      this.addsubstream();
    }
    else {
      console.log(this.data.type)
    }
  }

  addsubstream() {
    console.log(this.addsubstreamForm.value)
    if (this.addsubstreamForm.valid) {
      this.service.addSubStream(this.addsubstreamForm.value, "addSubStream/addsubstream").subscribe(result => {
        this.data = result;
        console.log(this.data)
        this.toastr.success('SubStream is Created')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }

  }

  updatesubstream() {
    const pk = this.addsubstreamForm.getRawValue().addsubstream_pk;
    if (pk != '' && pk != null) {
      this.service.updateSubStream(pk, this.addsubstreamForm.getRawValue(), "addSubStream/updatesubstream").subscribe(result => {
        this.toastr.success('Updated Successfully')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }


  getstream() {
    this.service.getStream("addSubStream/getstream").subscribe(getstream => {
      this.streamname = getstream;
      console.log(this.streamname)
    });
  }

  Getstream() {
    debugger
    this.service.getstream("data/getstream").subscribe(Streamnames => {
      this.dataSource = Streamnames;
      console.log(this.dataSource)
    });
  }

}
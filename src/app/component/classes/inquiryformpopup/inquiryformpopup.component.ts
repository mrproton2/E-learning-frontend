import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';
import { ToastrService } from 'ngx-toastr';
// export class streamname {
//   constructor(public addstream_pk: number, public stream_name: string) { }
// }

// export class substreamname {
//   constructor(public addsubstream_pk: number, public stream_pk: number, public sub_stream_name: string) { }
// }

@Component({
  selector: 'app-inquiryformpopup',
  templateUrl: './inquiryformpopup.component.html',
  styleUrls: ['./inquiryformpopup.component.css']
})
export class InquiryformpopupComponent implements OnInit {
  inputdata: any;
  tabledata = this.data;
  editdata: any;
  inquiryForm: FormGroup;
  genders: string[] = ['Male', 'Female', 'Others'];
  closemessage = 'closed using directive'
  streamdata: any[];
  substreamdata: any[];
  selectedstream: any;

  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<InquiryformpopupComponent>,
    private service: MasterService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private toastr:ToastrService
    ) {


  }

  ngOnInit() {
    this.inquiryForm = this.formBuilder.group({
      addinquiry_pk: [''],
      type: ['Create', Validators.required],
      name: ['', Validators.required],
      date: [new Date(), Validators.required],
      address: ['', Validators.required],
      contact_no: ['', [Validators.maxLength(10),Validators.minLength(10),Validators.required, Validators.pattern('^[0-9]*$'),]],
      email_id: ['', Validators.required,],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      stream_name: [''],
      substream_name: [''],
      previous_qualification: ['', Validators.required],
      school_college_name: ['', Validators.required],
    });

    this.tabledata = this.data
    if (this.tabledata.addinquiry_pk > 0) {
      this.inquiryForm.patchValue({
        title: this.tabledata.title,
        type: this.tabledata.type,
        addinquiry_pk: this.tabledata.addinquiry_pk,
        name: this.tabledata.studentname,
        date: this.tabledata.date,
        address: this.tabledata.address,
        contact_no: this.tabledata.contact_no,
        email_id: this.tabledata.email_id,
        gender: this.tabledata.gender,
        date_of_birth: this.tabledata.date_of_birth,
        previous_qualification: this.tabledata.previous_qualification,
        school_college_name: this.tabledata.school_college_name,
        stream_name: this.tabledata.stream_name,
        substream_name: this.tabledata.substream_name,

      })
    }
    this.getstreamname();
    this.getsubstreamname();
  }
  checkActionType() {
    if (this.inquiryForm.value.type == "Update") {
      this.UpdateInquiryForm();
    }
    else if (this.inquiryForm.value.type == "Create") {
      debugger
      this.addInquiryForm()
    }
    else {
    }
  }
  closepopup() {
    this.ref.close('Closed using function');
  }
  addInquiryForm() {
    console.log(this.inquiryForm.value)
    debugger
    if (this.inquiryForm.valid) {
      this.service.addInquiry(this.inquiryForm.value, "InquiryForm/addInquiryForm").subscribe(result => {
        this.data = result;
        this.toastr.success('Successfully Inquiry has been Done!')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check the Form again')
    }

  }

  UpdateInquiryForm() {
    console.log(this.inquiryForm.value)
    console.log(this.inquiryForm.getRawValue().addinquiry_pk)
    const pk = this.inquiryForm.getRawValue().addinquiry_pk;
    if (pk != '' && pk != null) {
      this.service.updateinquiryform(pk, this.inquiryForm.getRawValue(), "InquiryForm/updateinquiryform").subscribe(result => {
        this.toastr.success('Update has been Successfully !')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check the Form again')
    }
  }

  getstreamname() {
    this.service.getstream("data/getstream").subscribe(Streamnames => {
      this.streamdata = Streamnames;
      console.log(this.streamdata)
    });
  }

  getsubstreamname() {
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.substreamdata = subStreamnames;
      console.log(this.substreamdata)
    });
  }

  onSelect(s_pk: number) {
    debugger
    this.selectedstream = this.substreamdata.filter((item) => item.stream_pk == s_pk);
    console.log(this.selectedstream)
  }
}


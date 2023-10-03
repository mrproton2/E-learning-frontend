import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';


@Component({
  selector: 'app-inquiryformpopup',
  templateUrl: './inquiryformpopup.component.html',
  styleUrls: ['./inquiryformpopup.component.css']
})
export class InquiryformpopupComponent implements OnInit {
  inputdata: any;
  editdata: any;
  inquiryForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Others'];
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<InquiryformpopupComponent>, private buildr: FormBuilder,
   private service: MasterService, private dialog: MatDialog,private formBuilder: FormBuilder) {
    this.inquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: [null, Validators.required],
      address: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: [null, Validators.required],
      course: ['', Validators.required],
      qualification: ['', Validators.required],
      schoolName: ['', Validators.required],
    });

  }
  
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }


  setpopupdata(code: any) {
    this.service.GetCustomerbycode(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({name:this.editdata.name,email:this.editdata.email,phone:this.editdata.phone,
      status:this.editdata.status})
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    name: this.buildr.control(''),
    email: this.buildr.control(''),
    phone: this.buildr.control(''),
    status: this.buildr.control(true)
  });

  Saveuser() {
    this.service.Savecustomer(this.myform.value).subscribe(res => {
      this.closepopup();
    });
  }
  onSubmit() {
    if (this.inquiryForm.valid) {
      console.log(this.inquiryForm.value);
    }
}}

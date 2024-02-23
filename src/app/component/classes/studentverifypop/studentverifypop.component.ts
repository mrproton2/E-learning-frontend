import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentverifypop',
  templateUrl: './studentverifypop.component.html',
  styleUrls: ['./studentverifypop.component.css']
})
export class StudentverifypopComponent implements OnInit {
  studentverifyForm: FormGroup;
  getdatasubstream: any;
  inputdata: any;
  disblebtn:boolean=false;

  @Input() editable: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddbatchpopupComponent>,
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {

    this.studentverifyForm = this.formBuilder.group({
      // verificationstatus:['', Validators.required],
      admissionid_pk: ['', Validators.required],
      studentname: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['',],
      studentcontactno: ['', Validators.required],
      studentemail: ['', Validators.required],
      gender: ['',],
      previousQualification: ['',],
      school_college_name: ['',],
      studentaadharno: ['',],
      parentName: ['',],
      occupation: [''],
      income: [''],
      parentemail: ['',],
      parentcontactNo: [''],
      stream_name: [''],
      substream_name: [''],
      batchName: [''],
      dateofadmission: [''],
      totalFees: [''],
      discount: [''],
      feeswithoutgst: [''],
      feeswithgst: [''],
      payableamount: [''],
      Payingamount: [''],
      paymentType: [''],
      paymentvia: [''],
      paymentMode: [''],

    
    });
    debugger
    this.inputdata = this.data;
    console.log(this.data)
    if (this.inputdata.admissionid_pk > 0) {
      this.studentverifyForm.patchValue({
        admissionid_pk: this.inputdata.admissionid_pk,
        studentname: this.inputdata.studentname,
        dob: this.inputdata.dob,
        address: this.inputdata.address,
        studentcontactno: this.inputdata.studentcontactno,
        studentemail: this.inputdata.studentemail,
        gender: this.inputdata.gender,
        previousQualification: this.inputdata.previousQualification,
        school_college_name: this.inputdata.school_college_name,
        studentaadharno: this.inputdata.studentaadharno,
        parentName: this.inputdata.parentName,
        occupation: this.inputdata.occupation,
        income: this.inputdata.income,
        parentemail: this.inputdata.parentemail,
        parentcontactNo: this.inputdata.parentcontactNo,
        stream_name: this.inputdata.stream_name,
        substream_name: this.inputdata.substream_name,
        batchName: this.inputdata.batchName,
        dateofadmission: this.inputdata.dateofadmission,
        totalFees: this.inputdata.totalFees,
        discount: this.inputdata.discount,
        feeswithoutgst: this.inputdata.feeswithoutgst,
        feeswithgst: this.inputdata.feeswithgst,
        payableamount: this.inputdata.payableamount,
        paymentType: this.inputdata.paymentType,
        installmentamount: this.inputdata.installmentamount,
        installmentdate: this.inputdata.installmentdate,
        paymentvia: this.inputdata.paymentvia,
        paymentMode: this.inputdata.paymentMode,
        Payingamount: this.inputdata.Payingamount,
        idpassflag:this.inputdata.idpassflag,

      })
    }
    this.hideidpassbtn()
  }

 




  closepopup() {
    this.ref.close('Closed using function');
  }


  generate_student_idpass() {
    debugger
    if (this.studentverifyForm.valid) {
      debugger
      this.service.generateidpass(this.studentverifyForm.value, "Admission/generateIDpassword").subscribe(result => {
        this.data = result;
        this.toastr.success('Student ID PassWord Successfully!')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form again!')
    }
  }

  generate_parents_idpass(){
    if (this.studentverifyForm.valid) {
      debugger
      this.service.generateidpass(this.studentverifyForm.value, "Admission/generateparentsIDpassword").subscribe(result => {
        this.data = result;
        this.toastr.success('Parents ID PassWord Successfully!')
        this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form again!')
    }
  
  }

  
hideidpassbtn(){
  debugger
  if(this.inputdata.idpassflag=='Y'){
    this.disblebtn=false;
    console.log( this.disblebtn)
  }
}


}
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, pipe } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-admissionformpopup',
  templateUrl: './admissionformpopup.component.html',
  styleUrls: ['./admissionformpopup.component.css']
})
export class AdmissionformpopupComponent implements OnInit {
  admissionForm: FormGroup;
  showOTPVerification: boolean = false;
  selected: string = '';
  inquiryFormdata: any;
  filteredOptions;
  inputdata: any;
  streamdata: any[];
  substreamdata: any[];
  selectedstream: any;
  tabledata: any;
  batchdataSource:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AdmissionformpopupComponent>,
    private formBuilder: FormBuilder,
    private service: MasterService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    // Student Details
    this.admissionForm = this.formBuilder.group({

      studentname: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', Validators.required],
      gender: ['', Validators.required],

      previousQualification: ['', Validators.required],
      school_college_name: ['', Validators.required],

      // Add other student details form controls and validations here

      // Parents Details
      parentName: ['', Validators.required],
      occupation: ['', Validators.required],
      income: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      parentemail: ['', Validators.required,],
      parentcontactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      otp: [''],

      stream_name: ['', Validators.required],
      substream_name: ['', Validators.required],
      batchName: ['', Validators.required],
      dateofadmission: ['', Validators.required],

      totalFees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      discount: ['', Validators.required],
      gst: ['', Validators.required],
      feeswithoutgst: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      feeswithgst: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],








      paymentType: [''],



      fullPayment: [false],
      installmentMode: [false],
      numberOfInstallments: ['1'],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secondinstallmenamount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secondinstallmentdate: ['', Validators.required],
      thirdinstallmenamount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      thirdinstallmentdate: ['', Validators.required],



      paymentMode: [''],
      onlineMode: [false],
      offlineMode: [false],
      onlineAmount: [''],
      upi: [''],
      card: [''],
      banking: [''],
      offlineAmount: [''],
      offlineCollectedBy: [''],


    });









    this.tabledata = this.data
    if (this.tabledata.addinquiry_pk > 0) {
      this.admissionForm.patchValue({
        title: this.tabledata.title,
        type: this.tabledata.type,
        addinquiry_pk: this.tabledata.addinquiry_pk,
        studentname: this.tabledata.studentname,
        date: this.tabledata.date,
        address: this.tabledata.address,
        contactNo: this.tabledata.contact_no,
        email: this.tabledata.email_id,
        gender: this.tabledata.gender,
        dob: this.tabledata.date_of_birth,
        previousQualification: this.tabledata.previous_qualification,
        school_college_name: this.tabledata.school_college_name,
        stream_name: this.tabledata.stream_name,
        substream_name: this.tabledata.substream_name,

      })
      console.log(this.tabledata)
    }


    this.getstreamname()
    this.getsubstreamname();
    this.getInquiryForm();
    this.GetBatch();



    // this.admissionForm.get('inquirydataserach').valueChanges.subscribe(response=>{
    //   console.log('data is',response)
    //   this.filterdata(response);
    // })

  }


  onSubmit() {
    if (this.admissionForm.valid) {

      console.log(this.admissionForm.value);
    }
  }



  onVerify() {

    this.showOTPVerification = true;
  }

  onOTPVerify() {
    this.showOTPVerification = false;
  }
  onSelectionChange() {

  }

  getInquiryForm() {
    debugger
    this.service.getInquiryFormData("InquiryForm/InquiryFormData").subscribe(inquiryformdata => {
      this.inquiryFormdata = inquiryformdata;
    
      this.filteredOptions = inquiryformdata;

    });
  }


  getstreamname() {
    this.service.getstream("data/getstream").subscribe(Streamnames => {
      debugger
      this.streamdata = Streamnames;
    
    });
  }

  getsubstreamname() {
    debugger
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.substreamdata = subStreamnames;
      console.log(this.substreamdata )

    });
  }


  GetBatch() {
    this.service.getBatch("Batch/BatchData").subscribe(batchdata => {
      this.batchdataSource = batchdata;
    //  console.log(this.batchdataSource )
      
    });
  }

  onSelect(s_pk: number) {
    debugger
    this.selectedstream = this.substreamdata.filter((item) => item.stream_pk == s_pk);
  }

  batchSelect(s_pk: number) {
    debugger
    this.selectedstream = this.substreamdata.filter((item) => item.stream_pk == s_pk);
  }


}
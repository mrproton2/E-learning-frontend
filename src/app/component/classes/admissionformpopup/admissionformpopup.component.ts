import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
  selectedsubstream: any;
  tabledata: any;
  batchdataSource: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AdmissionformpopupComponent>,
    private formBuilder: FormBuilder,
    private service: MasterService,
    private dialog: MatDialog,
    private toastr:ToastrService
  ) { }

  ngOnInit() {

    // Student Details
    this.admissionForm = this.formBuilder.group({

      studentname: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      studentcontactno: ['', Validators.required],
      studentemail: ['', Validators.required],
      gender: ['', Validators.required],

      previousQualification: ['', Validators.required],
      school_college_name: ['', Validators.required],
      studentaadharno: ['', Validators.required],
      // Add other student details form controls and validations here

      // Parents Details
      parentName: ['', Validators.required],
      occupation: ['', Validators.required],
      income: ['', Validators.required],
      parentemail: ['', Validators.required,],
      parentcontactNo: ['', Validators.required],
      stream_name: ['', Validators.required],
      substream_name: ['', Validators.required],
      batchName: ['', Validators.required],
      dateofadmission: [new Date(), Validators.required],
      //Fess related
      totalFees: ['', Validators.required],
      discount: ['', Validators.required],
      gst: [{ value: '18', disabled: true }, Validators.required],
      feeswithoutgst: ['', Validators.required],
      feeswithgst: ['', Validators.required],
      payableamount: ['', Validators.required],
      Payingamount: [''],
      paymentType: [''],
      numberOfInstallments: [''],
      installmentamount: [''],
      installmentdate: ['',],
      paymentvia: [''],
      paymentMode: [''],
      offlineCollectedBy: [''],
      firstinstallment: [''],
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
        studentcontactno: this.tabledata.contact_no,
        studentemail: this.tabledata.email_id,
        gender: this.tabledata.gender,
        dob: this.tabledata.date_of_birth,
        previousQualification: this.tabledata.previous_qualification,
        school_college_name: this.tabledata.school_college_name,
        stream_name: this.tabledata.stream_name,
        substream_name: this.tabledata.substream_name,
      })

    }

    this.getInquiryForm();
    this.getstreamname()
    this.getsubstreamname(); 
    this.GetBatch();



  

  }


  
  onSubmit() {
    if (this.admissionForm.valid) {
      debugger
      this.service.addstream(this.admissionForm.value, "Admission/postAdmissionForm").subscribe(result => {
        this.data = result;
        this.toastr.success('Admission Suceessfully')
       // this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form again!')
    }

  }



  getInquiryForm() {
    this.service.getInquiryFormData("InquiryForm/InquiryFormData").subscribe(inquiryformdata => {
      this.inquiryFormdata = inquiryformdata;
      this.filteredOptions = inquiryformdata;
    });
  }


  getstreamname() {
    this.service.getstream("data/getstream").subscribe(Streamnames => {
      this.streamdata = Streamnames;
    });
  }

  getsubstreamname() {
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.substreamdata = subStreamnames;
    });
  }

  GetBatch() {
    this.service.getBatch("Batch/BatchData").subscribe(batchdata => {
      this.batchdataSource = batchdata;
    });
  }

  onSelect(s_pk: number) {
    this.selectedstream = this.substreamdata.filter((item) => item.stream_pk == s_pk);
  }

  batchSelect(s_pk: number) {
    this.selectedsubstream = this.batchdataSource.filter((item) => item.substream_pk == s_pk);
    this.admissionForm.patchValue({
      totalFees: this.selectedstream[0].fees
    })
  }

  Calculation() {
    const discount = (this.admissionForm.get('discount').value) / 100;
    const totalfee = this.admissionForm.get('totalFees').value;
    var totalValue = totalfee - (totalfee * discount)
    const gstAmount = (totalValue * 18) / 100;
    const totalAmountundergst = totalValue + gstAmount;
    this.admissionForm.patchValue({
      feeswithoutgst: totalValue,
      feeswithgst: totalAmountundergst,
      payableamount: totalAmountundergst,
      Payingamount: totalAmountundergst,
      

    })

  }
  installmentCal() {
    const TotalamountunderGst = this.admissionForm.get('payableamount').value;
    const Payingamount = this.admissionForm.get('firstinstallment').value;
    var installmentamt = TotalamountunderGst - Payingamount;
    this.admissionForm.patchValue({
      installmentamount: installmentamt,
      Payingamount: Payingamount,
    })
  }

}
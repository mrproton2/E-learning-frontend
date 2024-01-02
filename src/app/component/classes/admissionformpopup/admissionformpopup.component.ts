import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    // Student Details
    this.admissionForm = this.formBuilder.group({
      inquirydataserach: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      course: ['', Validators.required],
      previousQualification: ['', Validators.required],
      collegeName: ['', Validators.required],

      // Add other student details form controls and validations here

      // Parents Details
      parentName: ['', Validators.required],
      occupation: ['', Validators.required],
      income: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // email: ['', [Validators.required, Validators.email]],
      // contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      otp: [''],

      streamName: ['', Validators.required],
      substreamName: ['', Validators.required],
      batchName: ['', Validators.required],
      dateofadmission: ['', Validators.required],

      totalFees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      discount: ['', Validators.required],
      gst: ['', Validators.required],
      feeswithoutgst: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      feeswithgst: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secondinstallmenamount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      secondinstallmentdate: ['', Validators.required],
      thirdinstallmenamount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      thirdinstallmentdate: ['', Validators.required],

      paymentType: [''],
      paymentMode: [''],
      fullPayment: [false],
      installmentMode: [false],
      onlineMode: [false],
      offlineMode: [false],
      onlineAmount: [''],
      upi: [''],
      card: [''],
      banking: [''],
      offlineAmount: [''],
      offlineCollectedBy: [''],
      numberOfInstallments: ['1'],

    });
    this.getInquiryForm();
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
    this.service.getInquiryFormData("InquiryForm/InquiryFormData").subscribe(inquiryformdata => {
      this.inquiryFormdata = inquiryformdata;

    });
  }


}
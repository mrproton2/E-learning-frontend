import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feespaymentpop',
  templateUrl: './feespaymentpop.component.html',
  styleUrls: ['./feespaymentpop.component.css']
})
export class FeespaymentpopComponent implements OnInit {
  fesspaymentForm!: FormGroup;
  showOTPVerification: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

      // Student Details
      this.fesspaymentForm = this.formBuilder.group({
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
     
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      discount: ['', Validators.required],
      gst: ['', Validators.required],
      paidAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],


      fullPayment: [false],
      installmentMode: [false],
      onlineMode: [false],
      offlineMode: [false],
      onlineAmount: [''],
      upi: [false],
      card: [false],
      banking: [false],
      offlineAmount: [''],
      offlineCollectedBy: [''],
      numberOfInstallments: ['1'],

    });
  }

  onSubmit() {
    if (this.fesspaymentForm.valid) {
    
      console.log(this.fesspaymentForm.value);
    }
  }
  onVerify() {

    this.showOTPVerification = true;
  }

  onOTPVerify() {
    this.showOTPVerification = false;
  }
}
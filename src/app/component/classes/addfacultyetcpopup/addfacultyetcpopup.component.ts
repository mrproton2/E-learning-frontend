import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfacultyetcpopup',
  templateUrl: './addfacultyetcpopup.component.html',
  styleUrls: ['./addfacultyetcpopup.component.css']
})
export class AddfacultyetcpopupComponent implements OnInit {
  addfcultyetcForm: FormGroup;
    showOTPVerification: boolean = false;
    selected: string = '';
    constructor(private formBuilder: FormBuilder) {
      
     
    }
  
    ngOnInit() {
  
        // Student Details
        this.addfcultyetcForm = this.formBuilder.group({
          name: ['', Validators.required],
          dob: ['', Validators.required],
          address: ['', Validators.required],
          contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
          email: ['', [Validators.required, Validators.email]],
          gender: ['', Validators.required],
        
        
        // Add other student details form controls and validations here

        employee: ['', Validators.required],
        forsubject:['', Validators.required],
        qualification:['', Validators.required],
        experience:['', Validators.required],
        tioi:['', Validators.required],
        panno:['', Validators.required],
        aadharno:['', Validators.required],
        pha:['', Validators.required],
        ac:['', Validators.required],
        ifsc:['', Validators.required],
        salary:['', Validators.required],
        post:['', Validators.required],
        tds:['', Validators.required],
    
        fullPayment: [false],
  
      });
    }
  
    onSubmit() {
      if (this.addfcultyetcForm.valid) {
      
        console.log(this.addfcultyetcForm.value);
      }
    }
    
    onSelectionChange() {

    }
    addfaculty(){

    }

    addstaff(){
      
    }
    addpeon(){
      
    }
  }

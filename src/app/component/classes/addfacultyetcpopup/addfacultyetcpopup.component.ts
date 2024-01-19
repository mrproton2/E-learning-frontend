import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addfacultyetcpopup',
  templateUrl: './addfacultyetcpopup.component.html',
  styleUrls: ['./addfacultyetcpopup.component.css']
})
export class AddfacultyetcpopupComponent implements OnInit {
  addfacultyForm: FormGroup;
  addstaffForm: FormGroup;
  showOTPVerification: boolean = false;
  selected: string = '';
  data: any;
  subjectdatasource: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.addfacultyForm = this.formBuilder.group({
      employee: ['', Validators.required],
      fname: ['', Validators.required],
      fdob: ['', Validators.required],
      faddress: ['', Validators.required],
      fcontact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      femailid: ['', [Validators.required]],
      fgender: ['', Validators.required],
      fsubject: ['', Validators.required],
      fqualification: ['', Validators.required],
      fexperience: ['', Validators.required],
      fteaching_other_institute: ['', Validators.required],
      fpan_no: ['', Validators.required],
      faadhar_no: ['', Validators.required],
      fper_hour_amount: ['', Validators.required],
      faccout_no: ['', Validators.required],
      fifsc_code: ['', Validators.required],
      // salary: ['', Validators.required],
      // post: ['', Validators.required],
      ftsd_no: ['', Validators.required],
    });

    this.addstaffForm = this.formBuilder.group({
      employee: ['staff', Validators.required],
      sname: ['', Validators.required],
      sdob: ['', Validators.required],
      saddress: ['', Validators.required],
      scontact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      semailid: ['', [Validators.required]],
      sgender: ['', Validators.required],
      spost: ['', Validators.required],
      squalification: ['', Validators.required],
      sexperience: ['', Validators.required],
      span_no: ['', Validators.required],
      saadhar_no: ['', Validators.required],
      saccout_no: ['', Validators.required],
      sifsc_code: ['', Validators.required],
     ssalary: ['', Validators.required],
      // post: ['', Validators.required],
      stsd_no: ['', Validators.required],
    });


    this.getSubjects();

  }


  getSubjects() {
    this.service.getSubject("AddSubject/subjecttableget").subscribe(subjectname => {
      this.subjectdatasource = subjectname;
      console.log(this.subjectdatasource  );
    });
  }

  checkActionType() {
    debugger
    if (this.addfacultyForm.value.employee == "faculty") {
      this.addfaculty();
      console.log(this.addfacultyForm.value);
      debugger
    }
    else if (this.addfacultyForm.value.employee == "staff") {
      debugger
      this.addstaff()
    }
    else {
    }
  }

  addfaculty() {
    if (this.addfacultyForm.valid) {
      this.service.addfaculty(this.addfacultyForm.value, "AddFacultyOrStaff/addfaculty").subscribe(result => {
        this.data = result;
        console.log(this.data)
        this.toastr.success('SubStream is Created')
        //this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }
  addstaff() {
    console.log(this.addstaffForm.value)
    debugger
    if (this.addstaffForm.valid) {
      this.service.addfaculty(this.addstaffForm.value, "AddFacultyOrStaff/addstaff").subscribe(result => {
        this.data = result;
        console.log(this.data)
        this.toastr.success('SubStream is Created')
        //this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }

}

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
  SubStreamdataSource: any;
  selectedsubstream: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.addfacultyForm = this.formBuilder.group({
      employee: ['Faculty', Validators.required],
      fname: ['', Validators.required],
      fdob: ['', Validators.required],
      faddress: ['', Validators.required],
      fcontact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      femailid: ['', [Validators.required]],
      fgender: ['', Validators.required],
      fsubstream: ['', Validators.required],
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

  

    this.getSubStream()
    debugger
   this.getSubjects();

  }
  getSubStream() {
    debugger
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.SubStreamdataSource = subStreamnames;
    });
  }

  getSubjects() {
    debugger
    this.service.getSubject("AddSubject/Getsubjects").subscribe(subjectname => {
      this.subjectdatasource = subjectname;
    
    });
  }

  onSelect(s_pk: number) {
    debugger
    this.selectedsubstream = this.subjectdatasource.filter((item) => item.substream_pk == s_pk);
  }

  checkActionType() {
      this.addfaculty();
    }
  

  addfaculty() {
    debugger
    if (this.addfacultyForm.valid) {
      this.service.addfaculty(this.addfacultyForm.value, "AddFacultyOrStaff/addfaculty").subscribe(result => {
        this.data = result;
        console.log(this.data)
        this.toastr.success('Successfully')
        //this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }

 

}

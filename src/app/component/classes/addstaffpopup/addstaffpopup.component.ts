import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addstaffpopup',
  templateUrl: './addstaffpopup.component.html',
  styleUrls: ['./addstaffpopup.component.css']
})
export class AddstaffpopupComponent implements OnInit{
  addstaffForm: FormGroup;
 constructor(
  private formBuilder: FormBuilder,
  private service: MasterService,
  private toastr: ToastrService
 )
{}  

ngOnInit(): void {
    

    this.addstaffForm = this.formBuilder.group({
      employee: ['', Validators.required],
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

  }


  addstaff() {
    console.log(this.addstaffForm.value)
    debugger
    if (this.addstaffForm.valid) {
      this.service.addfaculty(this.addstaffForm.value, "AddFacultyOrStaff/addstaff").subscribe(result => {
        this.toastr.success('Successfully')
        //this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }
}

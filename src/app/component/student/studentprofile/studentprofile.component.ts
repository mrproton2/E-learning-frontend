import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';
import { ClassprofilepopComponent } from '../../classes/classprofilepop/classprofilepop.component';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  studentProfileForm: FormGroup;
  @Input() editable: boolean = false;
  sessionby: any;

  constructor(private service: MasterService, private dialog: MatDialog, private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.studentProfileForm = this.formBuilder.group({
      user_name: [''],
      studentname: [''],
      dob: [''],
      gender: [''],
      batch_name: [''],
      sub_stream_name: [''],
      studentcontactno: [''],
      studentemail: [''],
    });

    this.getstudentProfile();
  }

  getstudentProfile() {
    debugger
    const activeusersession = sessionStorage.getItem('activeuser')
    this.service.loginget(`StudentProfile/studentprofile/${activeusersession}`).subscribe(result => {
      this.sessionby = result
      console.log(this.sessionby)
      if (this.sessionby[0].user_id > 0) {
        this.studentProfileForm.patchValue({
          user_name: this.sessionby[0].user_name,
          studentname: this.sessionby[0].studentname,
          dob: this.sessionby[0].dob,
          gender: this.sessionby[0].gender,
          batch_name: this.sessionby[0].batch_name,
          sub_stream_name: this.sessionby[0].sub_stream_name,
          studentcontactno: this.sessionby[0].studentcontactno,
          studentemail: this.sessionby[0].studentemail,

        })
      }

    })
  }


}

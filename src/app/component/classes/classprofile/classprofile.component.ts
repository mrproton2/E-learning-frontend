import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

import { ClassprofilepopComponent } from '../classprofilepop/classprofilepop.component';

@Component({
  selector: 'app-classprofile',
  templateUrl: './classprofile.component.html',
  styleUrls: ['./classprofile.component.css']
})
export class ClassprofileComponent implements OnInit {
  classProfileForm: FormGroup;
  profiledataSource: any;
  classLogo='src\assets\WhatsApp Image 2023-10-10 at 00.14.54.jpeg';
  @Input() editable: boolean = false;



  constructor(private service: MasterService, private dialog: MatDialog, private formBuilder: FormBuilder) {

  }
  ngOnInit() {

    this.classProfileForm = this.formBuilder.group({
      classname: [''],
      date_of_creation:[''],
      slogan: [''],
      branchname: [''],
      address: [''],
      contact: [''],
      email: [''],
      panno:[''],
      aadharno: [''],
      gstno: [''],
      FilePath:['']

    });
    debugger
    this.getProfileFormdata();
    debugger
  
  

  }


  updateprofile() {
    this.Openpopup(0, 'Add Stream', ClassprofilepopComponent);
  }

  Openpopup(code: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '50%',
      height: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      console.log(item)

    })
  }
  onSubmit() {
    if (this.classProfileForm.valid) {

      console.log(this.classProfileForm.value);
    }
  }
  CreateProfile() {
    this.Openpopup(0, 'Add Stream', ClassprofilepopComponent);
  }
  // uploadForm(event){
  //   const file=(event.target as HTMLInputElement).files[0];
  //   this.classProfileForm.patchValue({
  //     logo:file
  //   });
  //   this.classProfileForm.get('logo').updateValueAndValidity();
  // }

  getProfileFormdata() {
    debugger
    this.service.getClassProfile("ClassProfile/profiledata").subscribe(profileformdata => {
      debugger
      this.profiledataSource = profileformdata;
    this.classLogo=this.profiledataSource[0].FilePath
      if (this.profiledataSource[0].class_pk > 0) {
        debugger
        this.SetValues();
      }
      else{
        alert('please check')
      }
    });
  }



  SetValues() {
debugger


    this.classProfileForm.patchValue({
      classname: this.profiledataSource[0].classname,
      date_of_creation: this.profiledataSource.date_of_creation,
      slogan: this.profiledataSource[0].slogan,
      branchname: this.profiledataSource[0].branchname,
      address: this.profiledataSource[0].address,
      contact: this.profiledataSource[0].contact,
      email: this.profiledataSource[0].email,
      panno: this.profiledataSource[0].panno,
      aadharno: this.profiledataSource[0].aadharno,
      gstno: this.profiledataSource[0].gstno,
      FilePath: this.profiledataSource[0].FilePath,
     
    })
    console.log(this.classProfileForm.value)
  }



}

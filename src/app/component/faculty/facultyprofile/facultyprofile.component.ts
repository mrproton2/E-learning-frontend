import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';
import { ClassprofilepopComponent } from '../../classes/classprofilepop/classprofilepop.component';

@Component({
  selector: 'app-facultyprofile',
  templateUrl: './facultyprofile.component.html',
  styleUrls: ['./facultyprofile.component.css']
})
export class FacultyprofileComponent implements OnInit{
  facultprofileForm!: FormGroup;



  constructor(private service: MasterService, private dialog: MatDialog,private formBuilder: FormBuilder) {
  
  }
  ngOnInit() {

    this.facultprofileForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob:['', Validators.required],
      address:['', Validators.required],
      contactNo:['', Validators.required],
      email:['', Validators.required],
      gender:['', Validators.required],
      forsubject:['', Validators.required],
      qualification:['', Validators.required],
      experience:['', Validators.required],
      tioi:['', Validators.required],
      panno:['', Validators.required],
      aadharno:['', Validators.required],
      tds:['', Validators.required],
      pha:['', Validators.required],
      ac:['', Validators.required],
        ifsc:['', Validators.required],
     
  });
}



  updateprofile(){
    this.Openpopup(0, 'Add Stream',ClassprofilepopComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '50%',
      height:'auto',
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
    if (this.facultprofileForm.valid) {
    
      console.log(this.facultprofileForm.value);
    }

}
}

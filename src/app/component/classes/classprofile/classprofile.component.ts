import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';
import { ClassdashboardpopupComponent } from '../classdashboardpopup/classdashboardpopup.component';
import { ClassprofilepopComponent } from '../classprofilepop/classprofilepop.component';

@Component({
  selector: 'app-classprofile',
  templateUrl: './classprofile.component.html',
  styleUrls: ['./classprofile.component.css']
})
export class ClassprofileComponent implements OnInit{
  dashboardForm!: FormGroup;



  constructor(private service: MasterService, private dialog: MatDialog,private formBuilder: FormBuilder) {
  
  }
  ngOnInit() {

    this.dashboardForm = this.formBuilder.group({
      name: ['', Validators.required],
      doc: ['', Validators.required],
      slogan: ['', Validators.required],
      logo: ['', Validators.required],
      branchname: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
    
      panno: ['', Validators.required],
      aadharno: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      collegeName: ['', Validators.required],
      gstno: ['', Validators.required],

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
    if (this.dashboardForm.valid) {
    
      console.log(this.dashboardForm.value);
    }

}
}

import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
//  import { PopupComponent } from './popup/popup.component';
import { PopupComponent } from 'src/app/component/popup/popup.component';
import { UserdetailComponent } from 'src/app/component/userdetail/userdetail.component';
import { AddstreampopComponent } from '../addstreampop/addstreampop.component';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';
import { ClassdashboardpopupComponent } from '../classdashboardpopup/classdashboardpopup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-classdashboard',
  templateUrl: './classdashboard.component.html',
  styleUrls: ['./classdashboard.component.css']
})
export class ClassdashboardComponent implements OnInit{
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
    this.Openpopup(0, 'Add Stream',ClassdashboardpopupComponent);
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

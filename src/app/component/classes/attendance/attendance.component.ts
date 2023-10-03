import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MasterService } from 'src/app/service/master.service';
import { ClassprofilepopComponent } from '../classprofilepop/classprofilepop.component';
import { AttendancepopupComponent } from '../attendancepopup/attendancepopup.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { UserdetailComponent } from '../../userdetail/userdetail.component';
import { AddstreampopComponent } from '../addstreampop/addstreampop.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent  {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "type",  "status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  selected: string = '';

  constructor(private service: MasterService, private dialog: MatDialog) {

  }

  

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  onSelectionChange() {

  }

  

  addcustomer(){
    this.Openpopup(0, 'Add Stream',AttendancepopupComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '100%',
      height:'80%',
      enterAnimationDuration: '200ms',
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

}

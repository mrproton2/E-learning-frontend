import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { AttendancepopupComponent } from '../attendancepopup/attendancepopup.component';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent  {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "type",'month','salary',"status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  selected: string = '';

  constructor(private service: MasterService, private dialog: MatDialog) {

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

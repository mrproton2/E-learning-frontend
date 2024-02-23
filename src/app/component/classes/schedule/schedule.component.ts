
import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
//  import { PopupComponent } from './popup/popup.component';
import { PopupComponent } from 'src/app/component/popup/popup.component';
import { UserdetailComponent } from 'src/app/component/userdetail/userdetail.component';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';
import { SchedulepopupComponent } from '../schedulepopup/schedulepopup.component';
import { AddtestpopupComponent } from '../addtestpopup/addtestpopup.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent  {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "batchname", "DOC", "status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  dataSource1 = new MatTableDataSource<any>(); // Define your data source
  dataSource2 = new MatTableDataSource<any>(); // Define your data source


  constructor(private service: MasterService, private dialog: MatDialog) {
    this.loadcustomer();
  }

  loadcustomer() {
    this.service.GetCustomer().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer',ScheduleComponent);
  }

  detailcustomer(code: any) {
    this.Openpopup(code, 'Customer Detail',UserdetailComponent);
  }

  

  addcustomer(){
    this.Openpopup(0, 'Add batch',SchedulepopupComponent);
  }
  addtest(){
    this.Openpopup(0, 'Add batch',AddtestpopupComponent);
  }


  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '100%',
      height:'80%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
      this.loadcustomer();
    })
  }
}

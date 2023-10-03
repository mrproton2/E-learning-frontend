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
import { AddstreampopComponent } from '../addstreampop/addstreampop.component';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';
import { AddfacultyetcpopupComponent } from '../addfacultyetcpopup/addfacultyetcpopup.component';





@Component({
  selector: 'app-addfacultyetc',
  templateUrl: './addfacultyetc.component.html',
  styleUrls: ['./addfacultyetc.component.css']
})
export class AddfacultyetcComponent

 {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "name","employeetype", "DOC", "status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

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
    this.Openpopup(code, 'Edit Customer',AddfacultyetcpopupComponent);
  }

  addemployee(){
    this.Openpopup(0, 'Add Stream',AddfacultyetcpopupComponent);
  }
  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '70%',
      height:'70%',
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

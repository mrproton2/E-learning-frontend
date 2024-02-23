import { Component, OnInit, ViewChild } from '@angular/core';

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


export interface batchtable {
  srno: string;
  bach_name: string;
  substreamname: string;
  DOC: string;
  status: string;
}


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "batch_name", "creation_date", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  selected: string = '';

  constructor(private service: MasterService, private dialog: MatDialog) {
  }
  ngOnInit(): void {



this.GetBatch()
  }



  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  onSelectionChange() {

  }



  Openpopup(data: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '100%',
      height: '80%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '1000ms',
      data: {
        batch_pk: data.addbatch_pk,
      }
    });
    _popup.afterClosed().subscribe(item => {
      console.log(item)

    })
  }

  GetBatch() {
    this.service.getBatch("Batch/BatchData").subscribe(batchname => {
      this.dataSource = batchname;
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<batchtable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
      
    });
  }


  view(data: any) {
    this.Openpopup(data, 'Add Stream', AttendancepopupComponent);
  }
}


import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

import { SchedulepopupComponent } from '../schedulepopup/schedulepopup.component';
import { AddtestpopupComponent } from '../addtestpopup/addtestpopup.component';
import { ToastrService } from 'ngx-toastr';


export interface scheduletable {
  schedule_id: string;
  dateoflecture: string;
  Timing: string;
  batch_name: string;
  subjects: string;
  name: string;
  notice: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent  implements OnInit {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno","dateoflecture", "Timing", "batch_name", "subjects", "name", "notice","action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  dataSource1 = new MatTableDataSource<any>(); // Define your data source
  dataSource2 = new MatTableDataSource<any>(); // Define your data source


  constructor(
    private service: MasterService, 
    private dialog: MatDialog,
    private toastr:ToastrService
    ) {
    
  }
  ngOnInit(): void {
   this.scheduleforclasspanel()
  }

  scheduleforclasspanel() {
    this.service.Get("Schedule/scheduleforclasspanel").subscribe(batchname => {
      this.dataSource = batchname;
      this.dataSource = new MatTableDataSource<scheduletable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  deleteschedule(element: any) {
    debugger
    if (confirm('Are you sure??')) {
      this.service.Delete(element, "Schedule/").subscribe(data => {
        this.toastr.success('Deleted Successfully')
        this.scheduleforclasspanel();
      })
    }


  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

 

  

  addschedule(){
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
     this.scheduleforclasspanel()
    })
  }
}

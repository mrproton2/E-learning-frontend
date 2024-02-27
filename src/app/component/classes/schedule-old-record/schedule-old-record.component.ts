import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

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
  selector: 'app-schedule-old-record',
  templateUrl: './schedule-old-record.component.html',
  styleUrls: ['./schedule-old-record.component.css']
})
export class ScheduleOldRecordComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ["srno","dateoflecture", "Timing", "batch_name", "subjects", "name", "notice"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


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
    this.service.Get("Schedule/oldscheduleforclasspanel").subscribe(batchname => {
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

 

  

 
}

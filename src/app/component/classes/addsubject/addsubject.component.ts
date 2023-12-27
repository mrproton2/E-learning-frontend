import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
//  import { PopupComponent } from './popup/popup.component';
import { AddsubjectpopComponent } from '../addsubjectpop/addsubjectpop.component';

export interface subjecttable {
  srno: string;
  subjects: string;
  status: string;
}


@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "batchname","subject", "DOC", "status",];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
  
  }
  ngOnInit(): void {
    this.getSubjects();
  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }


  addsubject(title: any, type: any) {
    this.Openpopup(0, title,type, AddsubjectpopComponent);
  }

  Openpopup(data: any, title: any,type:any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        type:type,
        addsubstream_pk:data.addsubstream_pk,
        select_stream_name:data.select_stream_name,
        sub_stream_name:data.sub_stream_name,
        fees:data.fees,
        creation_date:data.creation_date,
        status:data.status,
       
      }
    });
    _popup.afterClosed().subscribe(item => {
  this.getSubjects();
    })
  }
  getSubjects() {
    this.service.getSubject("AddSubject/Getsubjects").subscribe(subjectname => {
      this.dataSource = subjectname;
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<subjecttable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    });
  }

}

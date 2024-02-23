import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
//  import { PopupComponent } from './popup/popup.component';
import { AddsubjectpopComponent } from '../addsubjectpop/addsubjectpop.component';
import { AddsubjectviewpopComponent } from '../addsubjectviewpop/addsubjectviewpop.component';

export interface Substreamtable {
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
  dataSourcesubstream: any;
  displayedColumns: string[] = ["srno", "sub_stream_name", "fees", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.showsubstream();
  }


  Filterchange(data: Event) {
    debugger
    const value = (data.target as HTMLInputElement).value;
    this.dataSourcesubstream.filter = value;
  }


  addsubject(title: any, type: any) {
    this.Openpopup(0, title, type, AddsubjectpopComponent);
  }

  Openpopup(data: any, title: any, type: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '30%',
      height: '75%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        type: type,
        addsubstream_pk: data.addsubstream_pk,
        select_stream_name: data.select_stream_name,
        sub_stream_name: data.sub_stream_name,
        fees: data.fees,
        creation_date: data.creation_date,
        status: data.status,

      }
    });
    _popup.afterClosed().subscribe(item => {
    })
  }


  showsubstream() {
    debugger
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.dataSourcesubstream = subStreamnames;
      console.log(this.dataSourcesubstream)
       this.dataSourcesubstream = new MatTableDataSource<Substreamtable>(this.dataSourcesubstream);
      this.dataSourcesubstream.paginator = this.paginatior;
      this.dataSourcesubstream.sort = this.sort;

    });
  }


 



  Openpopupforsubjectview(data: any, title: any, type: any, component: any) {
    debugger
    var _popup = this.dialog.open(component, {
      width: '30%',
      height: '75%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        type: type,
        addsubstream_pk: data.addsubstream_pk,
        sub_stream_name: data.sub_stream_name,
        fees: data.fees,
        creation_date: data.creation_date,
        status: data.status,

      }
    });
    _popup.afterClosed().subscribe(item => {

    })
  }


  Viewsubjects(data: any, title: any, type: any) {
    debugger
    this.Openpopupforsubjectview(data, title, type, AddsubjectviewpopComponent)
  }

}

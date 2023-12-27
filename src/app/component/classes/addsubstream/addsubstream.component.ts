import { Component, OnInit, ViewChild } from '@angular/core';
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
import { AddsubstreampopupComponent } from '../addsubstreampopup/addsubstreampopup.component';
import { ToastrService } from 'ngx-toastr';

export interface Substreamtable {
  srno: string;
  substreamname: string;
  DOC: string;
  status: string;
  fees:string;
}



@Component({
  selector: 'app-addsubstream',
  templateUrl: './addsubstream.component.html',
  styleUrls: ['./addsubstream.component.css']
})
export class AddsubstreamComponent implements OnInit {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "substreamname","fees", "DOC", "status","action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: MasterService,
     private dialog: MatDialog,
     private toastr:ToastrService

     
     ) {
   
    
  }
  ngOnInit(): void {
   this.showsubstream();
  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addsubstream(title: any, type: any) {
    this.Openpopup(0, title,type, AddsubstreampopupComponent);
  }

  Openpopup(data: any, title: any,type:any, component: any) {
    debugger
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
    this.showsubstream();
    })
  }

 


  showsubstream() {
    debugger
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.dataSource = subStreamnames;
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<Substreamtable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    });
  }

  editsubstream(data: any, title: any, type: any) {
    if (confirm('Are you sure??')) {
      this.Openpopup(data, title, type, AddsubstreampopupComponent)

    }
  }
  deletesubstream(element:any){
    if (confirm('Are you sure??')) {
      this.service.deleteSubStream(element.addsubstream_pk, "addSubStream/").subscribe(data => {
        this.toastr.success('Deleted Successfully')
        this.showsubstream();
      })
    }
  }
}

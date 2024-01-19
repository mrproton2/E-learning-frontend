import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { substream } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { AddstreampopComponent } from '../addstreampop/addstreampop.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addstream',
  templateUrl: './addstream.component.html',
  styleUrls: ['./addstream.component.css']
})
export class AddstreamComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ["srno", "stream_name", "creation_date", "status", "action"];
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: MasterService, 
    private dialog: MatDialog,
    private toastr:ToastrService
    ) {


  }
  ngOnInit(): void {
    this.showstream();

  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addstream(title: any, type: any) {
    this.Openpopup(0, title, type, AddstreampopComponent);
  }

  Openpopup(data: any, title: any, type: any, component: any) {
    var _popup = this.dialog.open(component, {
      disableClose: true,
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        type: type,
        addstream_pk: data.addstream_pk,
        stream_name: data.stream_name,
        creation_date: data.creation_date,
        status: data.status
      }
    });

    _popup.afterClosed().subscribe(item => {
      this.showstream();
    })
  }

  showstream() {
    this.service.getstream("data/getstream").subscribe(Streamnames => {
      this.dataSource = Streamnames;
      debugger
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<substream>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  deletestream(element: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteStream(element.addstream_pk, "data/").subscribe(data => {
        this.toastr.success('Deleted Successfully')
        this.showstream();
      })
    }
  }

  editstream(data: any, title: any, type: any) {
    if (confirm('Are you sure??')) {
      debugger
      this.Openpopup(data, title, type, AddstreampopComponent)
    }
  }
}


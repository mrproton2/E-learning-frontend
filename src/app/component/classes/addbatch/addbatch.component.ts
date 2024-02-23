import { Component,OnInit,ViewChild } from '@angular/core';
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

export interface batchtable {
  srno: string;
  bach_name: string;
  substreamname: string;
  DOC: string;
  status: string;
}



@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit{
  customerlist !: Customer[];
  dataSource: any=[];
  displayedColumns: string[] = ["srno", "batch_name", "creation_date", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
  
  }
  ngOnInit(): void {
  this.GetBatch();
  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }


  addbatch(title: any, type: any){
    this.Openpopup(0, title,type, AddbatchpopupComponent);
  }

  Openpopup(data: any, title: any,type:any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
      }
    });
    _popup.afterClosed().subscribe(item => {
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

  deletestream(element: any) {
    if (confirm('Are you sure??')) {
      this.service.deletebatch(element.addbatch_pk, "Batch/").subscribe(data => {
        console.log(element.addbatch_pk)
        alert(data.toString());
        this.GetBatch();
      })
    }


  }
  editstream(data: any, title: any, type: any) {
    
  }

}

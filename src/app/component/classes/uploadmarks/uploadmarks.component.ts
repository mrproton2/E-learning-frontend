import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';

import { UploadmarkspopupComponent } from '../uploadmarkspopup/uploadmarkspopup.component';

@Component({
  selector: 'app-uploadmarks',
  templateUrl: './uploadmarks.component.html',
  styleUrls: ['./uploadmarks.component.css']
})
export class UploadmarksComponent {

  dataSource: any;
  displayedColumns: string[] = ["srno", "substream","batchname","subject", "date", "Uploadmarks","status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
 
  }

 

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }




  Upload(){
    this.Openpopup(0, 'upload marks',UploadmarkspopupComponent);
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
      console.log(item)
     
    })
  }

}


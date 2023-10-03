import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { UploadmaterialpopupComponent } from '../../classes/uploadmaterialpopup/uploadmaterialpopup.component';
import { UploadmaterialfacultypopupComponent } from '../uploadmaterialfacultypopup/uploadmaterialfacultypopup.component';

@Component({
  selector: 'app-uploadmaterialfaculty',
  templateUrl: './uploadmaterialfaculty.component.html',
  styleUrls: ['./uploadmaterialfaculty.component.css']
})
export class UploadmaterialfacultyComponent {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "batchname", "DOC", "status",];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
  
  }

  

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

 

  

  addmaterial(){
    this.Openpopup(0, 'Add Sub Stream',UploadmaterialfacultypopupComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '70%',
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


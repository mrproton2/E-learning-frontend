import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { UserdetailComponent } from '../../userdetail/userdetail.component';
import { AddsubjectpopComponent } from '../addsubjectpop/addsubjectpop.component';
import { UploadmaterialpopupComponent } from '../uploadmaterialpopup/uploadmaterialpopup.component';

@Component({
  selector: 'app-uploadmaterial',
  templateUrl: './uploadmaterial.component.html',
  styleUrls: ['./uploadmaterial.component.css']
})
export class UploadmaterialComponent{
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
    this.Openpopup(0, 'Add Sub Stream',UploadmaterialpopupComponent);
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

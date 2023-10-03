import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { UserdetailComponent } from '../../userdetail/userdetail.component';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';
import { FeespaymentpopComponent } from '../feespaymentpop/feespaymentpop.component';

@Component({
  selector: 'app-feespayment',
  templateUrl: './feespayment.component.html',
  styleUrls: ['./feespayment.component.css']
})
export class FeespaymentComponent{
  dataSource: any;
  displayedColumns: string[] = ["srno", "id", "name","date", "status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
    
  }

  

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }


  feespayment(){
    this.Openpopup(0, 'fees payment',FeespaymentpopComponent);
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

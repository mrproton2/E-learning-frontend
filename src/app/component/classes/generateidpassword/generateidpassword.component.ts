
import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
//  import { PopupComponent } from './popup/popup.component';
import { PopupComponent } from 'src/app/component/popup/popup.component';
import { UserdetailComponent } from 'src/app/component/userdetail/userdetail.component';
import { AddbatchpopupComponent } from '../addbatchpopup/addbatchpopup.component';

@Component({
  selector: 'app-generateidpassword',
  templateUrl: './generateidpassword.component.html',
  styleUrls: ['./generateidpassword.component.css']
})
export class GenerateidpasswordComponent  {
  customerlist !: Customer[];
  selected: string = '';
  dataSource: any;
  displayedColumns: string[] = ["srno", "name", "date","contact","type","status","view"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
  }

 

  onSelectionChange() {

  }


  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
    })
  }
}

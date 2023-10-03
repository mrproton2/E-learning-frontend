import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdetailComponent } from '../../userdetail/userdetail.component';
import { AdmissionformpopupComponent } from '../admissionformpopup/admissionformpopup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "batchname", "DOC", "status"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {

  }

  
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer',AdmissionformpopupComponent);
  }

  detailcustomer(code: any) {
    this.Openpopup(code, 'Customer Detail',UserdetailComponent);
  }

  

  addcustomer(){
    this.Openpopup(0, 'Add batch',AdmissionformpopupComponent);
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
      // console.log(item)
      
    })
  }
}


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
import { AddfacultyetcpopupComponent } from '../addfacultyetcpopup/addfacultyetcpopup.component';
import { AddstaffpopupComponent } from '../addstaffpopup/addstaffpopup.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';





@Component({
  selector: 'app-addfacultyetc',
  templateUrl: './addfacultyetc.component.html',
  styleUrls: ['./addfacultyetc.component.css']
})
export class AddfacultyetcComponent implements OnInit

 {
  customerlist !: Customer[];
  dataSourcefaculty: any;
  dataSourcefacultyidpass: any;
  displayedColumns: string[] = ["srno", "name","employeetype", "contact","action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  disblebtn:boolean=false;
  constructor(
    
    private dialog: MatDialog,
    private service: MasterService,
    private toastr: ToastrService
    ) {
    
  }
  ngOnInit(){
   this.GetFaculty();
  // this.GetFacultywithidpass()
  }

 

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSourcefaculty.filter = value;
  }


  addfaculty(){
    this.Openpopup(0, 'Add Stream',AddfacultyetcpopupComponent);
  }
  addstaff(){
    this.Openpopup(0, 'Add Stream',AddstaffpopupComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '70%',
      height:'70%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
   
    })
  }

  GetFaculty(){
    debugger
    this.service.getfaculty("AddFacultyOrStaff/getfacultywithidpass").subscribe(facultydata => {
      this.dataSourcefaculty = facultydata;
      console.log(this.dataSourcefaculty.idpassflag)
      // if(this.dataSourcefaculty.idpassflag='Y'){
      //   debugger
      //   this.disblebtn=false;
      // }
     
    });
  }


  idpassgenerate(data:any) {
    debugger
    if (data) {
      this.service.generateidpassfaculty(data, "AddFacultyOrStaff/generateIDpasswordfaculty").subscribe(result => {
        this.toastr.success('Successfully')
        //this.closepopup();
      })
    } else {
      this.toastr.warning('Please Check Form Again!')
    }
  }

  // GetFacultywithidpass(){
  //   debugger
  //   this.service.getfacultyidpass("AddFacultyOrStaff/getfacultywithidpass").subscribe(facultydata => {
  //     this.dataSourcefacultyidpass = facultydata;
  //     if(this.dataSourcefacultyidpass.idpassflag='Y'){
  //       this.disblebtn=false;
  //     }
  //   });
  // }


}

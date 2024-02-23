import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdetailComponent } from '../../userdetail/userdetail.component';
import { AdmissionformpopupComponent } from '../admissionformpopup/admissionformpopup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { StudentverifypopComponent } from '../studentverifypop/studentverifypop.component';

export interface admissiontable {
  studentname: string;
  batchName: string;
  studentcontactno: string;
  studentmail: string;
}

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ["studentname", "batchName", "studentcontactno", "studentmail", "verify"];
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  disblebtn:boolean=false;


  constructor(private service: MasterService, private dialog: MatDialog) {

  }
  ngOnInit(): void {

debugger

    this.getAdmissiondetails();

  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }



  Openpopup(data: any, title: any, type: any, component: any) {
   debugger
    var _popup = this.dialog.open(component, {
      disableClose: true,
      width: '75%',
      height:'80%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    
      data: {
        title: title,
        type: type,
        admissionid_pk: data.admissionid_pk,
        studentname: data.studentname,
        dob: data.dob,
        address: data.address,
        studentcontactno: data.studentcontactno,
        studentemail: data.studentemail,
        gender: data.gender,
        previousQualification: data.previousQualification,
        school_college_name: data.school_college_name,
      
        studentaadharno: data.studentaadharno,
        parentName: data.parentName,
        occupation: data.occupation,
        income: data.income,
  
        parentemail: data.parentemail,
        parentcontactNo: data.parentcontactNo,
        stream_name: data.stream_name,
        substream_name: data.substream_name,

        batchName: data.batchName,
        dateofadmission: data.dateofadmission,
        totalFees: data.totalFees,
        discount: data.discount,    
        feeswithoutgst: data.feeswithoutgst,
        feeswithgst: data.feeswithgst,
        payableamount: data.payableamount,
        paymentType: data.paymentType,
        installmentamount: data.installmentamount,
        installmentdate: data.installmentdate,
        paymentvia: data.paymentvia,
        paymentMode: data.paymentMode,
        Payingamount: data.Payingamount,
        idpassflag: data.idpassflag

      }
    });

    _popup.afterClosed().subscribe(item => {
    
    })
  }

  getAdmissiondetails() {
    debugger
    this.service.getAdmissionFormDetails("Admission/getAdmissionformdetails").subscribe(admissiondetails => {
      this.dataSource = admissiondetails;
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<admissiontable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.admissionid_pk)
 //    this.hideidpassbtn();
     

    });
  }

  verify(data: any, title: any, type: any){
    debugger
    this.Openpopup(data, title, type, StudentverifypopComponent)
  }

// hideidpassbtn(){
//   debugger
//   if(this.dataSource.value.idpassflag){
//     this.disblebtn=true;
//   }
// }

}


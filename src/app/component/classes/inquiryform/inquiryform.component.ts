import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { InquiryformpopupComponent } from '../inquiryformpopup/inquiryformpopup.component';
import { UserdetailComponent } from '../../userdetail/userdetail.component';

export interface Inquiryformtable {
  srno: string;
  studentname: string;
  dov: string;
  contactNO: string;
//  status: string;
}


@Component({
  selector: 'app-inquiryform',
  templateUrl: './inquiryform.component.html',
  styleUrls: ['./inquiryform.component.css']
})
export class InquiryformComponent {

  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["srno", "studentname", "DOV", "contactNO", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {
 
  }

  ngOnInit(): void {
this.showInquiryForm();

  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
   // this.Openpopup(code, 'Edit Customer',InquiryformpopupComponent);
  }

  detailcustomer(code: any) {
   // this.Openpopup(code, 'Customer Detail',UserdetailComponent);
  }

  

  addinquiry(title: any, type: any){
    this.Openpopup(0, title, type,InquiryformpopupComponent);
  }

  Openpopup(data: any, title: any, type: any, component: any) {
    var _popup = this.dialog.open(component, {

      width: '35%',
      height:'50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        type: type,
        addinquiry_pk:data.addinquiry_pk,
        studentname:data.name,
        date:data.date,
        address:data.address,
        contact_no:data.contact_no,
        email_id:data.email_id,
        gender:data.gender,
        date_of_birth:data.date_of_birth,
        previous_qualification:data.previous_qualification,
        school_college_name:data.school_college_name,
        stream_name:data.stream_name,
        substream_name:data.substream_name,
      }
    });
    _popup.afterClosed().subscribe(item => {
   this. showInquiryForm();
    })
  }




  showInquiryForm() {
    this.service.getInquiryFormData("InquiryForm/InquiryFormData").subscribe(inquiryformdata => {
      this.dataSource = inquiryformdata;
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource<Inquiryformtable>(this.dataSource);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }


  ViewEditInquiryForm(data: any, title: any, type: any){
    this.Openpopup(data, title, type, InquiryformpopupComponent)
  }


}

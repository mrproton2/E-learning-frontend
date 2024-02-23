import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import { AddstreamComponent } from './component/classes/addstream/addstream.component';
import { AddsubstreamComponent } from './component/classes/addsubstream/addsubstream.component';
import { LoginComponent } from './login/login.component';
import { AddbatchComponent } from './component/classes/addbatch/addbatch.component';
import { ClassdefaultComponent } from './component/classes/classdefault/classdefault.component';
import { ClassdashboardComponent } from './component/classes/classdashboard/classdashboard.component';
import { StudentdefaultComponent } from './component/student/studentdefault/studentdefault.component';
import { StudentdashboardComponent } from './component/student/studentdashboard/studentdashboard.component';
import { FacultydefaultComponent } from './component/faculty/facultydefault/facultydefault.component';
import { FacultydashboardComponent } from './component/faculty/facultydashboard/facultydashboard.component';
import { ParentsdefaultComponent } from './component/parents/parentsdefault/parentsdefault.component';
import { ParentsdashboardComponent } from './component/parents/parentsdashboard/parentsdashboard.component';
import { InquiryformComponent } from './component/classes/inquiryform/inquiryform.component';
import { AdmissionformComponent } from './component/classes/admissionform/admissionform.component';
import { GenerateidpasswordComponent } from './component/classes/generateidpassword/generateidpassword.component';
import { InvoicereportComponent } from './component/classes/invoicereport/invoicereport.component';
import { ScheduleComponent } from './component/classes/schedule/schedule.component';
import { AddsubjectComponent } from './component/classes/addsubject/addsubject.component';
import { AddfacultyetcComponent } from './component/classes/addfacultyetc/addfacultyetc.component';
import { ClassprofileComponent } from './component/classes/classprofile/classprofile.component';
import { AttendanceComponent } from './component/classes/attendance/attendance.component';
import { SalaryComponent } from './component/classes/salary/salary.component';
import { UploadmaterialComponent } from './component/classes/uploadmaterial/uploadmaterial.component';
import { FacultyprofileComponent } from './component/faculty/facultyprofile/facultyprofile.component';
import { StudentmyclassesComponent } from './component/student/studentmyclasses/studentmyclasses.component';
import { FeespaymentComponent } from './component/classes/feespayment/feespayment.component';
import { RaiseddoubtComponent } from './component/faculty/raiseddoubt/raiseddoubt.component';
import { SalarystatusComponent } from './component/faculty/salarystatus/salarystatus.component';
import { UploadmaterialfacultyComponent } from './component/faculty/uploadmaterialfaculty/uploadmaterialfaculty.component';
import { FacultyattendanceComponent } from './component/faculty/facultyattendance/facultyattendance.component';
import { StudentattendanceComponent } from './component/student/studentattendance/studentattendance.component';
import { StudentaskdoubtComponent } from './component/student/studentaskdoubt/studentaskdoubt.component';
import { StudenttrackdoubtComponent } from './component/student/studenttrackdoubt/studenttrackdoubt.component';
import { AttedanceInParentsComponent } from './component/parents/attedance-in-parents/attedance-in-parents.component';
import { ScheduleInParentsComponent } from './component/parents/schedule-in-parents/schedule-in-parents.component';
import { ResultInParentsComponent } from './component/parents/result-in-parents/result-in-parents.component';
import { FeesstatusComponent } from './component/parents/feesstatus/feesstatus.component';

import { FeepaymentInParentsComponent } from './component/parents/feepayment-in-parents/feepayment-in-parents.component';
import { StudentresultComponent } from './component/student/studentresult/studentresult.component';
import { UploadmarksComponent } from './component/classes/uploadmarks/uploadmarks.component';
import { StudentvideolecturepanelComponent } from './component/student/studentvideolecturepanel/studentvideolecturepanel.component';
import { StudentlecturepanelComponent } from './component/student/studentlecturepanel/studentlecturepanel.component';
import { guardGuard } from './guard.guard';
import { testgaurdGuard } from './testgaurd.guard';
import { StudentprofileComponent } from './component/student/studentprofile/studentprofile.component';
import { ResetstudnetpasswordComponent } from './component/student/resetstudnetpassword/resetstudnetpassword.component';
import { StudentscheduleComponent } from './component/student/studentschedule/studentschedule.component';
import { AttendancesubjectpopComponent } from './component/classes/attendancesubjectpop/attendancesubjectpop.component';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // faculty routing
  {
    path: 'facultydefault', component: FacultydefaultComponent,canActivateChild:[guardGuard],canActivate:[testgaurdGuard],
    children: [
      { path: 'facultydashboard', component: FacultydashboardComponent },
      { path: 'facultyprofile', component: FacultyprofileComponent },
      { path: 'raiseddoubt', component: RaiseddoubtComponent },
      { path: 'facultyattendance', component: FacultyattendanceComponent },
      { path: 'salarystatus', component: SalarystatusComponent },
      { path: 'uploadmaterial', component: UploadmaterialfacultyComponent },


    ]
  },
  // parents routing

  {
    path: 'parentsdefault', component: ParentsdefaultComponent,canActivateChild:[guardGuard],canActivate:[testgaurdGuard],
    children: [
      { path: 'parentsdashboard', component: ParentsdashboardComponent },
      { path: 'attedance-in-parents', component: AttedanceInParentsComponent },
      { path: 'schedule-in-parents', component: ScheduleInParentsComponent },
      { path: 'result-in-parents', component: ResultInParentsComponent },
      { path: 'feesstatus', component: FeesstatusComponent },
      { path: 'feepayment', component: FeepaymentInParentsComponent },
    ]
  },

  // student routing

  {
    path: 'studentdefault', component: StudentdefaultComponent,canActivateChild:[guardGuard],canActivate:[testgaurdGuard],
    children: [
      { path: 'studentdashboard', component: StudentdashboardComponent },
      { path: 'myclasses', component: StudentmyclassesComponent },
      { path: 'studentvideolecturepanel', component: StudentvideolecturepanelComponent },
      { path: 'studentlecturepanel', component: StudentlecturepanelComponent },
      { path: 'studentattendance', component: StudentattendanceComponent },
      { path: 'studentresult', component: StudentresultComponent },
      { path: 'studentaskdoubt', component: StudentaskdoubtComponent },
      { path: 'studenttrackdoubt', component: StudenttrackdoubtComponent },
      { path: 'studentprofile', component: StudentprofileComponent },
      { path: 'resetstudentpassword', component: ResetstudnetpasswordComponent },
      { path: 'studentschedule', component: StudentscheduleComponent },


    ]
  },
  //  classes routing 
  

  {
    path: 'classdefault', component: ClassdefaultComponent,canActivateChild:[guardGuard],canActivate:[testgaurdGuard],
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'input', component: InputComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'table', component: TableComponent },
      { path: 'form', component: FormdesignComponent },
      { path: 'classdashboard', component: ClassdashboardComponent },
      { path: 'associate', component: AssociateComponent },
      { path: 'addstream', component: AddstreamComponent },
      { path: 'addsubstream', component: AddsubstreamComponent },
      { path: 'addbatch', component: AddbatchComponent },
      { path: 'addsubject', component: AddsubjectComponent },
      { path: 'inquiryform', component: InquiryformComponent },
      { path: 'admissionform', component: AdmissionformComponent },
      { path: 'generateidpassword', component: GenerateidpasswordComponent },
      { path: 'invoicereport', component: InvoicereportComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'addfacultyetc', component: AddfacultyetcComponent },
      { path: 'classprofile', component: ClassprofileComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'salary', component: SalaryComponent },
      { path: 'uploadmaterial', component: UploadmaterialComponent },
      { path: 'feespayment', component: FeespaymentComponent },
      { path: 'uploadmarks', component: UploadmarksComponent },
      { path: 'attendancesubjectpop', component: AttendancesubjectpopComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material-module';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { PopupComponent } from './component/popup/popup.component';
import { AssociateComponent } from './component/associate/associate.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { AddstreamComponent } from './component/classes/addstream/addstream.component';
import { AddstreampopComponent } from './component/classes/addstreampop/addstreampop.component';
import { AddsubstreamComponent } from './component/classes/addsubstream/addsubstream.component';
import { AddsubstreampopupComponent } from './component/classes/addsubstreampopup/addsubstreampopup.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddbatchComponent } from './component/classes/addbatch/addbatch.component';
import { AddbatchpopupComponent } from './component/classes/addbatchpopup/addbatchpopup.component';
import { ClassdefaultComponent } from './component/classes/classdefault/classdefault.component';
import { ClassdashboardComponent } from './component/classes/classdashboard/classdashboard.component';
import { StudentdashboardComponent } from './component/student/studentdashboard/studentdashboard.component';
import { StudentdefaultComponent } from './component/student/studentdefault/studentdefault.component';
import { FacultydefaultComponent } from './component/faculty/facultydefault/facultydefault.component';
import { FacultydashboardComponent } from './component/faculty/facultydashboard/facultydashboard.component';
import { ParentsdashboardComponent } from './component/parents/parentsdashboard/parentsdashboard.component';
import { ParentsdefaultComponent } from './component/parents/parentsdefault/parentsdefault.component';

import { AdmissionformComponent } from './component/classes/admissionform/admissionform.component';
import { InquiryformComponent } from './component/classes/inquiryform/inquiryform.component';
import { InquiryformpopupComponent } from './component/classes/inquiryformpopup/inquiryformpopup.component';
import { AdmissionformpopupComponent } from './component/classes/admissionformpopup/admissionformpopup.component';
import { GenerateidpasswordComponent } from './component/classes/generateidpassword/generateidpassword.component';
import { InvoicereportComponent } from './component/classes/invoicereport/invoicereport.component';
import { ScheduleComponent } from './component/classes/schedule/schedule.component';
import { SchedulepopupComponent } from './component/classes/schedulepopup/schedulepopup.component';
;
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AddsubjectComponent } from './component/classes/addsubject/addsubject.component';
import { AddsubjectpopComponent } from './component/classes/addsubjectpop/addsubjectpop.component';
import { AddfacultyetcComponent } from './component/classes/addfacultyetc/addfacultyetc.component';
import { AddfacultyetcpopupComponent } from './component/classes/addfacultyetcpopup/addfacultyetcpopup.component';
import { ClassdashboardpopupComponent } from './component/classes/classdashboardpopup/classdashboardpopup.component';
import { ClassprofileComponent } from './component/classes/classprofile/classprofile.component';
import { ClassprofilepopComponent } from './component/classes/classprofilepop/classprofilepop.component';
import { AttendanceComponent } from './component/classes/attendance/attendance.component';
import { AttendancepopupComponent } from './component/classes/attendancepopup/attendancepopup.component';
import { SalaryComponent } from './component/classes/salary/salary.component';
import { AddtestpopupComponent } from './component/classes/addtestpopup/addtestpopup.component';
import { UploadmaterialComponent } from './component/classes/uploadmaterial/uploadmaterial.component';
import { UploadmaterialpopupComponent } from './component/classes/uploadmaterialpopup/uploadmaterialpopup.component';
import { FacultyprofileComponent } from './component/faculty/facultyprofile/facultyprofile.component';
import { StudentmyclassesComponent } from './component/student/studentmyclasses/studentmyclasses.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FeespaymentComponent } from './component/classes/feespayment/feespayment.component';
import { FeespaymentpopComponent } from './component/classes/feespaymentpop/feespaymentpop.component';
import { SalarystatusComponent } from './component/faculty/salarystatus/salarystatus.component';
import { RaiseddoubtComponent } from './component/faculty/raiseddoubt/raiseddoubt.component';
import { RaiseddoubtpopComponent } from './component/faculty/raiseddoubtpop/raiseddoubtpop.component';
import { UploadmaterialfacultyComponent } from './component/faculty/uploadmaterialfaculty/uploadmaterialfaculty.component';
import { UploadmaterialfacultypopupComponent } from './component/faculty/uploadmaterialfacultypopup/uploadmaterialfacultypopup.component';
import { FacultyattendanceComponent } from './component/faculty/facultyattendance/facultyattendance.component';
import { StudentattendanceComponent } from './component/student/studentattendance/studentattendance.component';
import { StudentaskdoubtComponent } from './component/student/studentaskdoubt/studentaskdoubt.component';
import { StudenttrackdoubtComponent } from './component/student/studenttrackdoubt/studenttrackdoubt.component';
import { AttedanceInParentsComponent } from './component/parents/attedance-in-parents/attedance-in-parents.component';
import { ScheduleInParentsComponent } from './component/parents/schedule-in-parents/schedule-in-parents.component';
import { ResultInParentsComponent } from './component/parents/result-in-parents/result-in-parents.component';
import { FeesstatusComponent } from './component/parents/feesstatus/feesstatus.component';
import { NotificationComponent } from './component/parents/notification/notification.component';
import { FeepaymentInParentsComponent } from './component/parents/feepayment-in-parents/feepayment-in-parents.component';
import { StudentresultComponent } from './component/student/studentresult/studentresult.component';
import { UploadmarksComponent } from './component/classes/uploadmarks/uploadmarks.component';
import { UploadmarkspopupComponent } from './component/classes/uploadmarkspopup/uploadmarkspopup.component';
import { StudentvideolecturepanelComponent } from './component/student/studentvideolecturepanel/studentvideolecturepanel.component';
import {VgApiService, VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule } from '@videogular/ngx-videogular/streaming';
import { StudentlecturepanelComponent } from './component/student/studentlecturepanel/studentlecturepanel.component'
import { ToastrModule } from 'ngx-toastr';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent,
    UserdetailComponent,
    AddstreamComponent,
    AddstreampopComponent,
    AddsubstreamComponent,
    AddsubstreampopupComponent,
    FooterComponent,
    LoginComponent,
    AddbatchComponent,
    AddbatchpopupComponent,
    ClassdefaultComponent,
    ClassdashboardComponent,
    StudentdashboardComponent,
    StudentdefaultComponent,
    FacultydefaultComponent,
    FacultydashboardComponent,
    ParentsdashboardComponent,
    ParentsdefaultComponent,
    AdmissionformComponent,
     InquiryformComponent,
     InquiryformpopupComponent,
     AdmissionformpopupComponent,
     GenerateidpasswordComponent,
     InvoicereportComponent,
     ScheduleComponent,
     SchedulepopupComponent,
     AddsubjectComponent,
     AddsubjectpopComponent,
     AddfacultyetcComponent,
     AddfacultyetcpopupComponent,
     ClassdashboardpopupComponent,
    
     ClassprofileComponent,
     ClassprofilepopComponent,
     AttendanceComponent,
     AttendancepopupComponent,
     SalaryComponent,
     AddtestpopupComponent,
     UploadmaterialComponent,
     UploadmaterialpopupComponent,
     FacultyprofileComponent,
     StudentmyclassesComponent,
     FeespaymentComponent,
     FeespaymentpopComponent,
     SalarystatusComponent,
     RaiseddoubtComponent,
     RaiseddoubtpopComponent,
     UploadmaterialfacultyComponent,
     UploadmaterialfacultypopupComponent,
     FacultyattendanceComponent,
     StudentattendanceComponent,
     StudentaskdoubtComponent,
     StudenttrackdoubtComponent,
     AttedanceInParentsComponent,
     ScheduleInParentsComponent,
     ResultInParentsComponent,
     FeesstatusComponent,
    
     NotificationComponent,
     FeepaymentInParentsComponent,
     StudentresultComponent,
     UploadmarksComponent,
     UploadmarkspopupComponent,
     StudentvideolecturepanelComponent,
     StudentlecturepanelComponent,
   
    
   
   
  
    
    
  ],
  imports: [
    MatNativeDateModule,
    CommonModule,
    ReactiveFormsModule,
    MatBottomSheetModule, 
    MatProgressBarModule, 
    MatStepperModule,
    MatSlideToggleModule , 
    MatSliderModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ToastrModule.forRoot({
      
    }),
    MatFormFieldModule,
    NgxMaterialTimepickerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

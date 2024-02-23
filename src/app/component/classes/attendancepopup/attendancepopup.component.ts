import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { batchtable } from '../addbatch/addbatch.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { AttendancesubjectpopComponent } from '../attendancesubjectpop/attendancesubjectpop.component';
export interface PeriodicElement {
  name: string;
  position: number;
  lecture: number;
  test: string;
}

@Component({
  selector: 'app-attendancepopup',
  templateUrl: './attendancepopup.component.html',
  styleUrls: ['./attendancepopup.component.css']
})

export class AttendancepopupComponent implements OnInit {
  attendanceForm: FormGroup;
  displayedColumns: string[] = ['srno', 'name', 'lecture', 'test','action'];
  dataSource: any;
  attedancetabledata: any
  studentdata: any
  scheduledata: any
  formattedDate: string;
  scheduleddata: any;
  filterscheduleddata: any;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MasterService,
    private datePipe: DatePipe,
    private dialog: MatDialog

  ) { }

  ngOnInit() {

    // Student Details
    this.attendanceForm = this.formBuilder.group({
      batchname: ['', Validators.required],
      date: ['', Validators.required],
      allotfaculty: ['', Validators.required],
      timing: ['', Validators.required],
      subject: ['', Validators.required],
      testtopic: ['', Validators.required],
      present: ['', Validators.required],
    });

    this.attedancetabledata = this.data.batch_pk;
    console.log(this.attedancetabledata)
    // this.getstudentrecord();
    this.getscheduledata();
  }



  onSubmit() {
   
    if (this.attendanceForm.value) {
    }
  }

  // getstudentrecord() {
  //   this.service.getstudenddata("Attendance/getstudenddata").subscribe(studentdata => {
  //     this.studentdata = studentdata;
  //     this.dataSource = this.studentdata.filter((item) => item.batchName == this.attedancetabledata);
  //   });
  // }

  getscheduledata() {
    this.service.Get("Schedule/getschedule").subscribe(scheduledatas => {
      let data = scheduledatas
      this.scheduledata = data.filter((item) => item.batchname == this.attedancetabledata);
      // this.dataSource = this.studentdata.filter((item) => item.batchName == this.attedancetabledata);  
    });
  }


  onDateChange(event: any) {
    const selectedDate = event.value;
    const inputDate = new Date(selectedDate);
    this.formattedDate = this.datePipe.transform(inputDate, 'yyyy-MM-dd');
    this.service.Get(`Schedule/chooseddate/${this.formattedDate}`).subscribe(result => {
      this.dataSource = result;
      console.log(this.scheduleddata)
    })
  }
  
  onSelect(sub_pk: number) {

    this.filterscheduleddata = this.scheduleddata.filter((item) => item.subjectname == sub_pk);
  }


  Openpopup(data: any, title: any, component: any) {
    debugger
    var _popup = this.dialog.open(component, {
      width: '100%',
      height: '80%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '1000ms',
      data: {
        batchname: data.batchname,
        Timing: data.Timing,
        dateoflecture: data.dateoflecture,
        facultyname: data.facultyname,
        name: data.name,
        notice: data.notice,
        schedule_id: data.schedule_id,
        subjectname: data.subjectname,
        subjects: data.subjects,
        substreamname: data.substreamname,
      }
    });
    _popup.afterClosed().subscribe(item => {
      console.log(item)

    })
  }
  view(data: any) {
    this.Openpopup(data, 'Add Stream', AttendancesubjectpopComponent);
    console.log(data)
  }

}




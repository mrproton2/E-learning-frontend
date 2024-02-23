import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
import { Substreamtable } from '../addsubstream/addsubstream.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedulepopup',
  templateUrl: './schedulepopup.component.html',
  styleUrls: ['./schedulepopup.component.css']
})
export class SchedulepopupComponent implements OnInit {
  scheduleForm: FormGroup;
  dataSourcesubstream: any;
  dataSourcebatchname: any;
  dataSourcefaculty: any;
  dataSourcesubject: any;
  selectedbatchname: any;
  selectedfaculty: any;
  selectedsubject: any;
  dataSource: any;


  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) {

  }
  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      substreamname: ['', Validators.required],
      batchname: ['', Validators.required],
      subjectdetails: new FormArray([
        new FormGroup({
          subjectname: new FormControl(''),
          facultyname: new FormControl(''),
          dateoflecture: new FormControl(),
          startTime: new FormControl(''),
          endTime: new FormControl(''),
          notice: new FormControl(''),

        })
      ])
    });

    this.showsubstream();
    this.GetBatch();
    this.GetFaculty();
    this.getSubjects();

  }
  get subjectdetails(): FormArray {
    return <FormArray>this.scheduleForm.get('subjectdetails')
  }
  addsubjectarray() {
    const control = <FormArray>this.scheduleForm.controls['subjectdetails']
    control.push(new FormGroup({
      subjectname: new FormControl(''),
      facultyname: new FormControl(''),
      dateoflecture: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      notice: new FormControl(''),
    }))
  }

  removesubject(index: number) {
    this.subjectdetails.removeAt(index);
  }

  showsubstream() {
    this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
      this.dataSourcesubstream = subStreamnames;
    });
  }
  GetBatch() {
    this.service.getBatch("Batch/BatchData").subscribe(batchname => {
      this.dataSourcebatchname = batchname;

    });
  }

  GetFaculty() {
    this.service.getBatch("AddFacultyOrStaff/getfacultydata").subscribe(facultydata => {
      this.dataSourcefaculty = facultydata;
      console.log(this.dataSourcefaculty);
    });
  }

  getSubjects() {
    debugger
    this.service.getSubject("AddSubject/Getsubjects").subscribe(subjectname => {
      this.dataSourcesubject = subjectname;
    });
  }

  selectbatch(substream_pk: any) {
    debugger
    this.selectedbatchname = this.dataSourcebatchname.filter((item) => item.substream_pk == substream_pk);
    this.selectedfaculty = this.dataSourcefaculty.filter((item) => item.substream_pk == substream_pk);
    this.selectedsubject = this.dataSourcesubject.filter((item) => item.substream_pk == substream_pk);

  }
  onSubmit() {
    this.addschedule();
  }


  addschedule() {
    debugger
    if (this.scheduleForm.valid) {
      this.service.addInquiry(this.scheduleForm.value, "Schedule/Addschedule").subscribe(result => {
        this.toastr.success('Successfully !')
      })
    } else {
      this.toastr.warning('Please Check the Form again')
    }

  }

}

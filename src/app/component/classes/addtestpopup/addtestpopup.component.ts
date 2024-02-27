import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addtestpopup',
  templateUrl: './addtestpopup.component.html',
  styleUrls: ['./addtestpopup.component.css']
})
export class AddtestpopupComponent {
  testForm: FormGroup;
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
    private toastr: ToastrService
  ) {

  }
  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      substreamname: ['', Validators.required],
      batchname: ['', Validators.required],
      testdetails: new FormArray([
        new FormGroup({
          subjectname: new FormControl(''),
          facultyname: new FormControl(''),
          dateoftest: new FormControl(''),
          topicname: new FormControl(''),
          testtype: new FormControl(''),
          totalmark: new FormControl(''),
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
  get testdetails(): FormArray {
    return <FormArray>this.testForm.get('testdetails')
  }
  addsubjectarray() {
    const control = <FormArray>this.testForm.controls['testdetails']
    control.push(new FormGroup({
      subjectname: new FormControl(''),
      facultyname: new FormControl(''),
      dateoftest: new FormControl(''),
      topicname: new FormControl(''),
      testtype: new FormControl(''),
      totalmark: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      notice: new FormControl(''),
    }))
  }

  removesubject(index: number) {
    this.testdetails.removeAt(index);
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
    if (this.testForm.valid) {
      this.service.addInquiry(this.testForm.value, "AddTest/AddTest").subscribe(result => {
        this.toastr.success('Successfully !')
      })
    } else {
      this.toastr.warning('Please Check the Form again')
    }

  }

}

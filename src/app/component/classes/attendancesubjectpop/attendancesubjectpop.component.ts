import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-attendancesubjectpop',
  templateUrl: './attendancesubjectpop.component.html',
  styleUrls: ['./attendancesubjectpop.component.css']
})
export class AttendancesubjectpopComponent implements OnInit {
  scheduledata: any;
  attedancetabledata: any;
  studentdata: any;
  dataSource: any;
  checkboxForm: FormGroup;
  datas: any[];
  parentSelector: boolean = false;


  tableData: any[] = [];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MasterService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {
  
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      batchname: [this.data.batchname],
      dateoflecture: [this.data.dateoflecture],
      facultyname: [this.data.facultyname],
      schedule_id: [this.data.schedule_id],
      subjectname: [this.data.subjectname],
      Timing: [this.data.Timing],
      tableData: this.formBuilder.array([])
    });

    // this.dataSource.forEach(item => {
    //   this.checkboxForm.addControl(item.id.toString(), new FormControl(item.checked));
    // });


    this.attedancetabledata = this.data;
    console.log(this.attedancetabledata)
    this.getstudentrecord()
  }



  getstudentrecord() {
    this.service.getstudenddata("Attendance/getstudenddata").subscribe(studentdata => {
      debugger
      this.studentdata = studentdata;
      this.dataSource = this.studentdata.filter((item) => item.batchName == this.data.batchname);
      this.tableData=this.dataSource
      console.log(this.dataSource)
      this.initFormArray();
    });
  }

  onSubmit() {

  }



  initFormArray() {
    debugger
    const formArray = this.form.get('tableData') as FormArray;
    this.tableData.forEach(item => {
      formArray.push(this.formBuilder.group({
        user_id: [item.user_id],
        studentname: [item.studentname],
        presentflag: [0]
      }));
    });
  }

  submitData() {
    debugger
    const formData = this.form.value;
    if (this.form.value) {
      this.service.Post(this.form.value, "Attendance/attendancedata").subscribe(result => {
        this.toastr.success('Successfully !')
      })
    } else {
      this.toastr.warning('Please Check the Form again')
    }

    //   .subscribe(response => {
    //     console.log('Data submitted successfully:', response);
    //   }, error => {
    //     console.error('Error submitting data:', error);
    //   });
  }

}



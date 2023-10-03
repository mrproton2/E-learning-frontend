import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Student {
  id: number;
  name: string;
  selected: boolean;
}
@Component({
  selector: 'app-attendancepopup',
  templateUrl: './attendancepopup.component.html',
  styleUrls: ['./attendancepopup.component.css']
})
export class AttendancepopupComponent {
  attendanceForm!: FormGroup;
  
  displayedColumns: string[] = ['id', 'name','selectlecture','selecttest'];
  dataSource: Student[] = [
    { id: 1, name: 'Abhi', selected: false },
    { id: 2, name: 'Sunil', selected: false },
    { id: 3, name: 'Jaydeep', selected: false },
    { id: 4, name: 'Ankit', selected: false },
    { id: 5, name: 'Harsh', selected: false },
    { id: 6, name: 'Mukesh', selected: false },
    { id: 7, name: 'Vishal', selected: false },
    { id: 8, name: 'Nikhil', selected: false },
    // Add more data here
  ];

  allSelected = false;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

      // Student Details
      this.attendanceForm = this.formBuilder.group({
        batchname: ['', Validators.required],
        date: ['', Validators.required],
        allotfaculty: ['', Validators.required],
      
        timing: ['', Validators.required],
        subject: ['', Validators.required],
        testtopic: ['', Validators.required],
      });
    }
  
  
  onSubmit() {
    if (this.attendanceForm.valid) {
    
      console.log(this.attendanceForm.value);
    }
  }

  selectAll() {
    this.allSelected = !this.allSelected;
    this.dataSource.forEach(student => student.selected = this.allSelected);
  }
  selectRow(row: Student) {
    row.selected = !row.selected;
    this.allSelected = this.dataSource.every(student => student.selected);
  }
}


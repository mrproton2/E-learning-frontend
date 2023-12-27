import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Student {
  id: number;
  name: string;
  selected: boolean;
}
@Component({
  selector: 'app-uploadmarkspopup',
  templateUrl: './uploadmarkspopup.component.html',
  styleUrls: ['./uploadmarkspopup.component.css']
})
export class UploadmarkspopupComponent {
  uploadmarksForm!: FormGroup;
  
  displayedColumns: string[] = ['id', 'name','obtainmarks','totalmarks'];
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


  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

      // Student Details
      this.uploadmarksForm = this.formBuilder.group({
        substreamname: ['', Validators.required],
        batchname: ['', Validators.required],
        date: ['', Validators.required],
        allotfaculty: ['', Validators.required],
      
        timing: ['', Validators.required],
        subject: ['', Validators.required],
        testtopic: ['', Validators.required],
        obtainmarks: ['', Validators.required],
        totalmarks: ['', Validators.required],
      });
    }
  
  
  onSubmit() {
    if (this.uploadmarksForm.valid) {
    
      console.log(this.uploadmarksForm.value);
    }
  }

  // selectAll() {
  //   this.allSelected = !this.allSelected;
  //   this.dataSource.forEach(student => student.selected = this.allSelected);
  // }
  // selectRow(row: Student) {
  //   row.selected = !row.selected;
  //   this.allSelected = this.dataSource.every(student => student.selected);
  // }
}


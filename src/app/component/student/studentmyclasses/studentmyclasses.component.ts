import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentmyclasses',
  templateUrl: './studentmyclasses.component.html',
  styleUrls: ['./studentmyclasses.component.css']
})
export class StudentmyclassesComponent {
  studentmyclassesForm!: FormGroup;
  hidden = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.studentmyclassesForm = this.formBuilder.group({
       
    });
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;

}
}

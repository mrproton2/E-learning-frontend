import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addtestpopup',
  templateUrl: './addtestpopup.component.html',
  styleUrls: ['./addtestpopup.component.css']
})
export class AddtestpopupComponent {
  addtestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addtestForm = this.formBuilder.group({
      name: '',
      batch:'',
      subjects: this.formBuilder.array([])
      
    });
  }
  get subjects() {
    return this.addtestForm.get('subjects') as FormArray;
  }

  addlecture() {
    const schudelueGroup = this.formBuilder.group({
      sub: '',
      faculty:'',
      date:'',
      notice:'',
      topicname:'',
      title:'',
      totalmarks:'',
      
    });
    this.subjects.push(schudelueGroup);
  }

  removesubject(index: number) {
    this.subjects.removeAt(index);
  }

  onSubmit() {
    console.log(this.addtestForm.value);
  }
}

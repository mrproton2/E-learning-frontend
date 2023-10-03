import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facultydashboard',
  templateUrl: './facultydashboard.component.html',
  styleUrls: ['./facultydashboard.component.css']
})
export class FacultydashboardComponent {
  facultydashboardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.facultydashboardForm = this.formBuilder.group({

        subject: ['', ],
        timing: ['', ],
        type: ['', ],
        date: ['', ],
        contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

     
       
    });
  }

}

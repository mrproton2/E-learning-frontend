import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addsubjectpop',
  templateUrl: './addsubjectpop.component.html',
  styleUrls: ['./addsubjectpop.component.css']
})
export class AddsubjectpopComponent implements OnInit {
  subjectForm: FormGroup;
  dataSource:any;
  data:any;

  constructor(private formBuilder: FormBuilder,private service: MasterService, private dialog: MatDialog) {
    this.subjectForm = this.formBuilder.group({
      substream_pk: [''],
      type: ['Create', Validators.required],
      subjects: new FormArray([
        new FormGroup({
          subjectname:new FormControl('')
        })
      ])
    });
  }
  ngOnInit(): void {
   this.getsubstream()


  }


  checkActionType() {
   
    if (this.subjectForm.value.type == "Update") {
    // this.updatesubstream();
    }
    else if (this.subjectForm.value.type == "Create") {
     this.addsubject();
    }
    else {
      console.log("fail")
    }
  }
  get subjects(): FormArray{
    return <FormArray> this.subjectForm.get('subjects')
  }
addsubjectarray(){
  const control=<FormArray>this.subjectForm.controls['subjects']
  control.push(new FormGroup({
    subjectname:new FormControl('')
  }))
}
  // get subjects() {
  //   return this.subjectForm.get('subjects') as FormArray;
  // }

  // addsubjectrow() {

  //   const subjectGroup = this.formBuilder.group({
  //     subjectname: '',
      
  //   });
  //   this.subjects.push(subjectGroup);
  //   console.log(this.addsubjectrow)
  // }


  removesubject(index: number) {
    this.subjects.removeAt(index);
  }

  // get subjects() {
  //   return this.subjectForm.get('subjects') as FormArray;
  // }


  addsubject() {
    debugger
    console.log(this.subjectForm.value)
    if (this.subjectForm.valid) {
      this.service.addSubStream(this.subjectForm.value, "AddSubject/addsubject").subscribe(result => {
      this.data = result;
      console.log(this.data)
        confirm('Suject Added successfully')
     //   this.closepopup();
      })
    } else {
      alert('fail')
    }

    }


    
    getsubstream() {

      this.service.getSubStream("addSubStream/getsubstream").subscribe(subStreamnames => {
        this.dataSource = subStreamnames;
        console.log(this.dataSource)
      });
    }






}

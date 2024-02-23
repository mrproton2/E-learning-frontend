import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-uploadmaterialpopup',
  templateUrl: './uploadmaterialpopup.component.html',
  styleUrls: ['./uploadmaterialpopup.component.css']
})
export class UploadmaterialpopupComponent implements OnInit {
  uploadForm: FormGroup;
  dataSourcesubstream: any;
  dataSourcebatchname: any;
  dataSourcefaculty: any;
  dataSourcesubject: any;
  selectedbatchname: any;
  selectedfaculty: any;
  selectedsubject: any;
  dataSource: any;
  fileToUpload: any;
  progressValue=0;


  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      substreamname: ['', Validators.required],
      batchname: ['', Validators.required],
      subjectname: new FormControl(''),
      contenttitle: new FormControl(''),
      facultyname: new FormControl(''),
      dateofupload: new FormControl(''),
      uploadby: new FormControl(''),
      MyFile: new FormControl(''),
      // subjectdetails: new FormArray([
      //   new FormGroup({
      //     subjectname: new FormControl(''),
      //     contenttitle: new FormControl(''),
      //     facultyname: new FormControl(''),
      //     dateofupload: new FormControl(''),
      //     uploadby: new FormControl(''),
      //     myFile: new FormControl(''),
  

      //   })
      // ])
    });


    

    this.showsubstream();
    this.GetBatch();
    this.GetFaculty();
    this.getSubjects();

  }
  get subjectdetails(): FormArray {
    return <FormArray>this.uploadForm.get('subjectdetails')
  }
  // addsubjectarray() {
  //   const control = <FormArray>this.uploadForm.controls['subjectdetails']
  //   control.push(new FormGroup({
  //     subjectname: new FormControl(''),
  //     contenttitle: new FormControl(''),
  //     facultyname: new FormControl(''),
  //     dateofupload: new FormControl(''),
  //     uploadby: new FormControl(''),
  //     myFile: new FormControl(''),
    
  //   }))
  // }

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

  handleFileInput(e: any) {
    debugger
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.fileToUpload = e?.target?.files[0];
      
    }
  }

  onSubmit() {
    debugger
   console.log( this.uploadForm)
   this.addschedule()
  }

  addschedule() {
    console.log( this.uploadForm)
    const formData: FormData = new FormData();
    // const arrayOfValues = this.uploadForm.get('subjectdetails')!.value;
    // for (let i = 0; i < arrayOfValues.length; i++) {
    //   formData.append('values[]', arrayOfValues[i]);}
    formData.append('MyFile', this.fileToUpload);
    formData.append('substreamname', this.uploadForm.value.substreamname);
    formData.append('batchname', this.uploadForm.value.batchname);
    formData.append('subjectname', this.uploadForm.value.subjectname);
    formData.append('contenttitle', this.uploadForm.value.contenttitle);
    formData.append('facultyname', this.uploadForm.value.facultyname);
    formData.append('dateofupload', this.uploadForm.value.dateofupload);
    formData.append('uploadby', this.uploadForm.value.uploadby);
    return this.http.post('https://localhost:44390/api/UploadMaterial', formData,
      {
        headers: new HttpHeaders()
      })
      .subscribe(() => this.toastr.success('Successfully'));


  }

}

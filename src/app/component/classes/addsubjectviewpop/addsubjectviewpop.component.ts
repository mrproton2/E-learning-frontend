import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addsubjectviewpop', 
  templateUrl: './addsubjectviewpop.component.html',
  styleUrls: ['./addsubjectviewpop.component.css']
})
export class AddsubjectviewpopComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ["srno", "subjects"];
  subjectnames: any;
  dataSourcesubject: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MasterService,
  ) {

  }

 

  ngOnInit(): void {
    debugger
  this.getSubjects()
    // this.onSelect(this.data.addsubstream_pk)
    
  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.subjectnames.filter = value;
  }


  getSubjects() {
    debugger
    this.service.getSubject("AddSubject/Getsubjects").subscribe(subjectname => {
      this.dataSourcesubject=subjectname;
      if(this.dataSourcesubject.value=!null){
        debugger
       this.onSelect(this.data.addsubstream_pk);
      }

    });
  }

  onSelect(substream_pk: any) {
    debugger
    this.subjectnames = this.dataSourcesubject.filter((item) => item.substream_pk == substream_pk);
    console.log(this.subjectnames )
  }
}

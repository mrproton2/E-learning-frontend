import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facultydefault',
  templateUrl: './facultydefault.component.html',
  styleUrls: ['./facultydefault.component.css']
})
export class FacultydefaultComponent {
  constructor(private toastr: ToastrService,
    private router: Router){
  
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

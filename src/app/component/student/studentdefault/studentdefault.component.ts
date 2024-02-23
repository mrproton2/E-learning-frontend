import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentdefault',
  templateUrl: './studentdefault.component.html',
  styleUrls: ['./studentdefault.component.css']
})
export class StudentdefaultComponent {

  constructor(private toastr: ToastrService,
    private router: Router){
  
  }
  
    logout(){
      sessionStorage.clear();
      this.router.navigate(['/login']);
      this.toastr.success("Successfully logout!!")
    }
  

}

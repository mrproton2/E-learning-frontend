import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parentsdefault',
  templateUrl: './parentsdefault.component.html',
  styleUrls: ['./parentsdefault.component.css']
})
export class ParentsdefaultComponent {


  constructor(private toastr: ToastrService,
    private router: Router){
  
  }
  
    logout(){
      sessionStorage.clear();
      this.router.navigate(['/login']);
      
    }
  

}

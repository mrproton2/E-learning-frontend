import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Observable, catchError ,map} from 'rxjs';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataserviceService {
apiUrl:string="";
baseApiUrl:any="https://localhost:44390/api/";

  constructor(
    
    private http:HttpClient,
    private router:Router,
    private headers:HttpHeaders,
   
   ) { 
    
   }
    
                                  
PostData(inputParam:any,url:string):Observable<any> {
  debugger
  this.apiUrl=this.baseApiUrl;
  url=this.apiUrl+url;
  return this.http.post<any>(url,inputParam,{headers:this.headers=new HttpHeaders({'Content-Type':'application/json; charset=utf-8' }
)})
 .pipe(map(response=>{
  return response;
 }))
//.pipe(catchError(error.status));

}

// handleError(error:HttpErrorResponse){
//   if(!error.ok){
//     var message='';
//     if(error.status==408){
//       message="Bad Request";
//       return error;
//     }
//     else if(error.status==401){
//       message = "Unauthorized";
//       return error;
//     }
//     else if(error.status==403){
//       message = "Forbidden";
//       return error;
//     }
//     else if(error.status==404){
//       message = "Not Found";
//       return error;
//     }
//     else if(error.status==408){
//       message = "TimeOut";
//       return error;
//     }
//     else if(error.status==409){
//       message = "Conflict";
//       return error;
//     }
//     else if(error.status==500){
//       message = "Internal server error";
//       return error;
//     }
    
//     return (error);
    
//   }
// }

}

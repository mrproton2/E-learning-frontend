import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country, Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  public baseurl: any = "https://localhost:44390/api/";

  constructor(private http: HttpClient) { }

  GetColorList(): colorentity[] {
    return [
      { code: 'c0', name: 'black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' }

    ]
  }

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:4200/table");
  }

  Savecustomer(data: any) {
    console.log(data)
    return this.http.post("http://localhost:4200/table", data);
  }

  GetCustomerbycode(code: any) {
    return this.http.get("http://localhost:3000/customer/" + code);
  }

  GetAssociate() {
    return this.http.get('http://localhost:3000/associate');
  }
  GetAssociatebycode(code: any) {
    return this.http.get('http://localhost:3000/associate/' + code);
  }
  // GetCountry():Observable<Country[]>{
  //   return this.http.get<Country[]>('http://localhost:3000/country');
  // }

  SaveAssociate(data: any, code: any) {
    return this.http.put('http://localhost:3000/associate/' + code, data);
  }


  //AddStream

  addstream(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getstream(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }
  deleteStream(data: any, url: any) {
    debugger
    url = this.baseurl + url;
    console.log(url)
    return this.http.delete(url + data);
  }

  updatestream(pk: any, data: any, url: any) {
    url = this.baseurl + url;
    return this.http.put(url, data);
  }

  //AddSubstream

  addSubStream(data: any, url: any) {
    debugger
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getSubStream(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }
  deleteSubStream(data: any, url: any) {
    url = this.baseurl + url;
    console.log(url)
    return this.http.delete(url + data);
  }

  updateSubStream(pk: any, data: any, url: any) {
    url = this.baseurl + url;
    return this.http.put(url, data);
  }

  getStream(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);

  }


  //InquiryForm

  addInquiry(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getInquiryFormData(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }


  updateinquiryform(pk: any, data: any, url: any) {
    url = this.baseurl + url;
    return this.http.put(url, data);
  }

  //AddSubject services

  addsubject(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getSubject(url: any): Observable<any[]> {
    debugger
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }

  // AddBatch servivces
  addbatch(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }

  getBatch(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }
  deletebatch(data: any, url: any) {
    url = this.baseurl + url;
    console.log(url)
    return this.http.delete(url + data);
  }

  //AddFacultyOrStaff


  addfaculty(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getfaculty(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }
  getfacultyidpass(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }

  generateidpassfaculty(data: any, url: any) {
    debugger
    url = this.baseurl + url;
    return this.http.post(url, data);
  }


  //classprofile


  // addclassprofile(data: any, url: any) {
  //   debugger
  //   url = this.baseurl + url;
  //   return this.http.post(url, data);
  // }
  getClassProfile(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }


  //Admission Related Services

  getAdmissionFormDetails(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }


  generateidpass(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }

  //schedule Related Services

  postschedule(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }



  //attendance Realated Services
  getstudenddata(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }


// Login Related Services

login(data: any, url: any) {
 
  url = this.baseurl + url;
  return this.http.post(url, data);
}

loginget(url: any): Observable<any[]> {
  debugger
  url = this.baseurl + url;
  return this.http.get<any>(url);
}

//Common Servive
Post(data: any, url: any) {
  debugger
  url = this.baseurl + url;
  return this.http.post(url, data);
}
Get(url: any): Observable<any[]> {

  url = this.baseurl + url;
  return this.http.get<any>(url);
}
Delete(data: any, url: any) {
  url = this.baseurl + url;
  console.log(url)
  return this.http.delete(url + data);
}

Put(pk: any, data: any, url: any) {
  url = this.baseurl + url;
  return this.http.put(url, data);
}


}

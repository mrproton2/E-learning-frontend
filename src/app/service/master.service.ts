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

  addstream(data: any, url: any) {
    url = this.baseurl + url;
    return this.http.post(url, data);
  }
  getstream(url: any): Observable<any[]> {
    url = this.baseurl + url;
    return this.http.get<any>(url);
  }
  deleteStream(data: any, url: any){
    debugger
    url = this.baseurl + url;
    console.log(url)
    return this.http.delete(url+data);
  }

  updatestream(pk:any,data: any, url: any) {
    url = this.baseurl + url;
    return this.http.put(url, data);
  }
  
}
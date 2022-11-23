import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  apiLink:string = localStorage.getItem("SCRIPTURL") || "";
  constructor(private http: HttpClient) { }

  getOptions(){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return options;
  }

  getDatabases(){
    var body = {
      "method": "GET",
      "Action": "DATABASES"
    }
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getAccountsList(DatabaseMainID:any){
    var body = {
      "method": "GET",
      "Action": "ACCOUNTSLIST",
      "DatabaseMainID": DatabaseMainID
    }
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getAttributesData(DatabaseMainID:any, AccountId:any){
    var body = {
      "method": "GET",
      "Action": "ATTRIBUTESDATA",
      "DatabaseMainID": DatabaseMainID,
      "AccountId": AccountId
    }
    return this.http.post(this.apiLink, body, this.getOptions());
  }
}

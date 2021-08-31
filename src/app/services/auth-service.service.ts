import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { AnyMxRecord } from 'dns';
// import { Http, RequestOptions } from '@angular/http';
import { environment } from 'src/environments/environment';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // userResponse: any;
  // isAuthorized: boolean = false;
  // isAdmin: boolean = false;

  // displayName: any;

  // constructor(private http: Http) { }

  // getUserdetails(){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.get('https://inps-test-ui.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/getuser', options);
  // }

  // setUserdetails(data: any){
  //   this.userResponse = data;
  //   // this.displayName = decodeURIComponent(this.userResponse._json.firstName);
  // }


  
  private url = 'https://inps-test-ui.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/getuser';
  private userSubject: BehaviorSubject<any>;
  private adminSubject: BehaviorSubject<boolean>;
  private geoLeadSubject: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
  this.userSubject = new BehaviorSubject(null);

  //for Admin
  this.adminSubject = new BehaviorSubject<boolean>(false);

  //for Geo-Lead
  this.geoLeadSubject = new BehaviorSubject<boolean>(false);
 
   this.http.get<any>(this.url).subscribe(user => {
     this.userSubject.next(user);
             
     //logic code 
    if(user._json.blueGroups.indexOf(environment.bg_Admin) != -1)
     {
      this.adminSubject.next(true);
     }
     if(user._json.blueGroups.indexOf(environment.bg_GeoLead) != -1)
     {
       this.geoLeadSubject.next(true);
     }
  });
  }

  userDetails = () => this.userSubject;
  isAdmin = () => this.adminSubject;
  isGeoLead = () => this.geoLeadSubject;
}

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class W3SSORetrievalService {

  private url = 'https://inps-test-ui.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/getUserName';
  private userNameSubject: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.userNameSubject = new BehaviorSubject("");
    this.http.get<string>(this.url).subscribe(userName => this.userNameSubject.next(userName));
  }
  userName = () => this.userNameSubject;
  // constructor() { }
}

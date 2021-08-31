import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgDetailsService {

  private url = 'https://inps-test-ui.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/getUserEmail';
  private bluepageAPI = 'https://bluepages.ibm.com/BpHttpApisv3/wsapi?byInternetAddr=';
  private orgGroupAPI='https://bluepages.ibm.com/BpHttpApisv3/wsapi?orgCodes=';
  private userEmailSubject: BehaviorSubject<string>;
  private bluePageSubject: BehaviorSubject<any>;
  private orgGroupSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.userEmailSubject = new BehaviorSubject("");
    this.bluePageSubject = new BehaviorSubject(" ");
    this.orgGroupSubject = new BehaviorSubject(" ");

    this.http.get<string>(this.url).subscribe(userEmail => {
      this.userEmailSubject.next(userEmail);
      
    this.http.get(this.bluepageAPI+userEmail, { responseType: 'text' })
      .subscribe(data => {
        data = '{"' + data.split('#')[0].split('\n').join('","').split(':').join('":"');
        data = data.substring(0, data.length - 2) + '}';
        const jsonData = JSON.parse(data);
        this.bluePageSubject.next(jsonData);

        var code = jsonData.ORGCODE;
        code = code.slice(1);

        this.http.get(this.orgGroupAPI + code, {responseType:'text'}).subscribe(data => {
					data = '{"' + data.split('#')[0].split('\n').join('","').split(':').join('":"');
					data = data.substring(0, data.length - 2) + '}';
					
					const orgJsonData = JSON.parse(data);
          this.orgGroupSubject.next(orgJsonData);
        });
        
      });
    
      });
  }

  detailsFromOrgGroup = () => this.orgGroupSubject;

}

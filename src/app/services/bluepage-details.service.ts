import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BluepageDetailsService {

  private url = 'https://inps-test-ui.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/getUserEmail';
  private bluepageAPI = 'https://bluepages.ibm.com/BpHttpApisv3/wsapi?byInternetAddr=';
  private userEmailSubject: BehaviorSubject<string>;
    private bluePageSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.userEmailSubject = new BehaviorSubject("");
    this.bluePageSubject = new BehaviorSubject(" ");

    this.http.get<string>(this.url).subscribe(userEmail => {
      this.userEmailSubject.next(userEmail);
      
    this.http.get(this.bluepageAPI+userEmail, { responseType: 'text' })
      .subscribe(data => {
        data = '{"' + data.split('#')[0].split('\n').join('","').split(':').join('":"');
        data = data.substring(0, data.length - 2) + '}';
        const jsonData = JSON.parse(data);
        this.bluePageSubject.next(jsonData);
        
      });
    
      });
       
  }

  
  userEmail = () => this.userEmailSubject;
 
  detailsFromBluepage = () => this.bluePageSubject;

  
}

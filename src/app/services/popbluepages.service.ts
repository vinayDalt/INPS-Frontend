import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class POPBluepagesService {

  email: any;
  ID: any;
  source:any;

  private POPbluepageAPI = 'https://bluepages.ibm.com/BpHttpApisv3/wsapi?byInternetAddr=';
  // private POPbluePageSubject: BehaviorSubject<any>;


  constructor(private http: HttpClient) {
    
    // this.POPbluePageSubject = new BehaviorSubject(" ");

    // this.http.get(this.POPbluepageAPI+this.email, { responseType: 'text' })
    // .subscribe(data => {
    //   data = '{"' + data.split('#')[0].split('\n').join('","').split(':').join('":"');
    //   data = data.substring(0, data.length - 2) + '}';
    //   const jsonData = JSON.parse(data);
    //   this.POPbluePageSubject.next(jsonData);
      
    // });

   }

   POPdetailsFromBluepage = (email : any) => 
   {
     return this.http.get(this.POPbluepageAPI + email, { responseType: 'text' })
    .pipe( 
      map( data => 
        {
        
        data = '{"' + data.split('#')[0].split('\n').join('","').split(':').join('":"');
        data = data.substring(0, data.length - 2) + '}';
         return JSON.parse(data);
        }))
       
   };

}

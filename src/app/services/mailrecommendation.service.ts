import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailrecommendationService {

  constructor(private http : HttpClient) { }

  getGeoPm(geo_pm:any) {
    return this.http.get('//w3-services1.w3-969.ibm.com/myw3/unified-profile/v1/api/find?limit=10&q='+geo_pm);
    
    }

}

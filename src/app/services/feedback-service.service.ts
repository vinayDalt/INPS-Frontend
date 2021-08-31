import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AdhocFeedback} from '../tsclasses/adhoc-feedback';
import { Country } from '../tsclasses/country';
import { POP } from '../tsclasses/pop';
// import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private httpClient:HttpClient) { }

  saveFeedback(adhocFeedback : AdhocFeedback){
    return this.httpClient.post('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/adhoc/new', adhocFeedback , {observe : 'response'});
  }

  saveFeedbackForPOP(pop : POP){
    return this.httpClient.post('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/adhoc/new', pop , {observe : 'response'});
  }

  getAllNPSFeedback(){
    return this.httpClient.get<AdhocFeedback[][]>('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/adhoc/view', {responseType : 'json'});
  }

  deleteFeedback(_id : string){
    return this.httpClient.delete('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/adhoc/remove/'+ _id , {responseType : 'json'});

  }

  // downloadFeedback(formatType : string){
  //   return this.httpClient.get('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/adhoc/report/'+ formatType , {responseType : 'json'});
  // }

  saveCountry(country : Country){
    return this.httpClient.post('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/country/new', country , {observe : 'response'});
  }

  getAllCountryData(){
    return this.httpClient.get<Country[][]>('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/country/view', {responseType : 'json'});
  //http://localhost:8096/api/
  //https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/
  }

  deleteCountry(id : string){
    return this.httpClient.delete('https://inps.wdc1a.ciocloud.nonprod.intranet.ibm.com/api/country/remove/'+ id , {responseType : 'json'});

  }
  
 

}

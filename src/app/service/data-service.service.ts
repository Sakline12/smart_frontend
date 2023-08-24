import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  httpClient: any;
  constructor(private http: HttpClient) { }

  //about
  about_details() {
    return this.http.get(environment.apiUrl + '/api/open/about-details');
  }

  teamMemberDetails(){
    return this.http.get(environment.apiUrl + '/api/open/our-team-member-list');
  }

  //device
  interactiveIntroDetails(){
    return this.http.get(environment.apiUrl + '/api/open/interactive-slider-details');
  }

  deviceList(){
    return this.http.get(environment.apiUrl + '/api/open/device-items-details');
  }

  //Interactive specificaton
  specification(){
    return this.http.get(environment.apiUrl + '/api/open/list-of-InteractiveSpecification');
  }

  //video-link-details
  interactiveVideoLinks(){
    return this.http.get(environment.apiUrl + '/api/open/video-link-details');
  }

  //Signage
  signagrIntroDetails(){
    return this.http.get(environment.apiUrl + '/api/open/signage-introduction-details');
  }

  //signageDetails
  signageDetails(){
    return this.http.get(environment.apiUrl + '/api/open/signage-details');
  }
}

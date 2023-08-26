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

  //Signage slider
  signageSliderInfo(){
    return this.http.get(environment.apiUrl + '/api/open/details-signage-slider');
  }

  //Signage specification
  signageSpecification(){
    return this.http.get(environment.apiUrl + '/api/open/list-of-signage-specification');
  }

  //Sinage video links
    SignageVideoLinks(){
      return this.http.get(environment.apiUrl + '/api/open/signage-video-link-details');
    }

  //Location details

  locationDetails(){
    return this.http.get(environment.apiUrl + '/api/open/location-details');
  }

  //mail send

  sendMail(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(environment.apiUrl + '/api/open/send-a-mail', data, {
      headers: headers,
    });
  }

}

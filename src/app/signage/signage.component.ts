import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-signage',
  templateUrl: './signage.component.html',
  styleUrls: ['./signage.component.css']
})
export class SignageComponent implements OnInit{
  title: any;
  header: any;
  signageBackgroundImage: any;
  signageFrontendImage: any;
  description: any;
  itemList: any;
  constructor(private dataService: DataServiceService,){
  }

  ngOnInit(): void {
    this.signageIntro();
    this.signageDetails();
  }

  signageIntro(){
    this.dataService.signagrIntroDetails().subscribe((data: any) => {
      this.title=data.title;
      this.header=data.data.header;
      this.signageBackgroundImage=data.data.background_image;
      this.signageFrontendImage=data.data.image;
    });
  }

  signageDetails(){
    this.dataService.signageDetails().subscribe((data: any) => {
      this.title=data.title;
      this.description=data.description;
      this.itemList=data.data;
    });
  }

}

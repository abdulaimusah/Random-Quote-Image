import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-dogimage',
  templateUrl: './dogimage.component.html',
  styleUrls: ['./dogimage.component.css']
})
export class DogimageComponent implements OnInit {

  constructor(
    private fetchData : FetchdataService
  ) { }
  
  imageSrc: any = "";
  dogImage: any = "";

  rightImage(): boolean {
    if (this.imageSrc && (this.imageSrc.slice === "mp4")) {
      return false;
    }
    return true;
    
  }

  getImage(): void {
    this.fetchData.getImage()
    .subscribe((res) => {
      this.dogImage = res;
      this.imageSrc = this.dogImage.url;
    }); 
  }

  ngOnInit(): void {
    this.getImage();
  }

  onClick(): void {
    this.getImage();
  }
  
}

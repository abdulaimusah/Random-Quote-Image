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

  isError: boolean = false;
  isLoading: boolean = false;


  

  /*rightImage(): boolean {
    if (this.imageSrc && (this.imageSrc.slice === "mp4")) {
      return false;
    }
    return true;  
  }*/


  getImage(): void {
    this.isLoading = true;
    this.fetchData.getImage()
    .subscribe({
       next: (res: any) => {
        this.dogImage = res;
        this.imageSrc = this.dogImage.url;
      },
       error: (err: any) => {
        if(err) {
          this.isError = true;
        }
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        console.log(this.imageSrc);
      }
    }); 

    
  }

  ngOnInit(): void {
    this.getImage();
  }

  onClick(): void {
    this.getImage();
  }
  
}

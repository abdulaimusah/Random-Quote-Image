import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from './types/quote';


@Injectable({
  providedIn: 'root'
})

export class FetchdataService {
  //private imageUrl: string = "https://dog.ceo/api/breeds/image/randoms";
  private imageUrl: string = "https://random.dog/woof.json";
  //private quoteUrl: string = "https://api.themotivate365.com/stoic-quote";
  private quoteUrl: string = "https://api.kanye.rest/";

  constructor(
    private http: HttpClient
  ) {}

  

  getImage(): Observable<any> {
    return this.http.get<any>(this.imageUrl)
  }

  

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.quoteUrl)
  }

  
}

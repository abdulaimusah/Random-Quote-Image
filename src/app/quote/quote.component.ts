import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { Quote } from '../types/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(
    private fetchData : FetchdataService
  ) { }

  theQuote: Quote = {
    quote: ""
  };


  getQuote(): void {
    this.fetchData.getQuote()
    .subscribe(quote => this.theQuote = quote);
  }

  ngOnInit(): void {
    
      this.getQuote();
  }

  onClick(): void {
    this.getQuote();
  }
  

  

}

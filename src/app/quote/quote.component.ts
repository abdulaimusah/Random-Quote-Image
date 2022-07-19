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

  isError: boolean = false;
  isLoading: boolean = true;
  

  getQuote(): void {
    this.isLoading = true;
    this.fetchData.getQuote()
    .subscribe({
      next: quote => this.theQuote = quote,
      error: err => {
        this.isError = true;
        this.isLoading = false
      },
      complete: () => this.isLoading = false
    })
  }

  ngOnInit(): void {
      this.getQuote();
  }

  onClick(): void {
    this.getQuote();
  }
  

  

}

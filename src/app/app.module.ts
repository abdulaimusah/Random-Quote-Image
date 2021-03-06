import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogimageComponent } from './dogimage/dogimage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PicspinnerComponent } from './picspinner/picspinner.component';
import { TextframeComponent } from './textframe/textframe.component';

@NgModule({
  declarations: [
    AppComponent,
    DogimageComponent,
    FooterComponent,
    HeaderComponent,
    QuoteComponent,
    SpinnerComponent,
    PicspinnerComponent,
    TextframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

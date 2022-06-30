import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogimageComponent } from './dogimage/dogimage.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  /*{path: "blog", component: PostlistComponent},
  {path: "post/:id", component: PostComponent},
{path: "create" , component: FormComponent},*/
 // {path: "" , component: AppComponent}
 {path: "image", component: DogimageComponent},
 {path: "quote", component: QuoteComponent},
 {path: "" , redirectTo: "image" , pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

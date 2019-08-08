import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductComponent,
    HomeComponent,
    OrderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'product', component:ProductComponent },
      { path:'product/:id', component:ProductDetailComponent },
      { path:'home', component: HomeComponent },
      { path:'order', component: OrderComponent },
      { path:'', redirectTo:'home', pathMatch : 'full' },
      { path:'**', component: NotFoundComponent }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

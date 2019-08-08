import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[]
  filteredProducts : Product[] ;
  show :any = true;
  showHide : any = 'Show';

  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => { 
          this.filteredProducts = this.products = data;
      });
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
    this.products.filter(p => p.productName.toLowerCase().includes(query.toLowerCase())) :
    this.products;
  }



  showOrHide() {
    this.show = !this.show;
    if (this.show) {
        this.showHide = 'Show'
    } else {
      this.showHide = 'Hide'
    }
  }
    

}

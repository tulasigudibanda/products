import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id;
  product : Product[] = [];

  constructor(private route : ActivatedRoute,
    private router : Router,
    private productService : ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductDetails(this.id)
      .subscribe(data => {
        console.log(data);
        this.product = data;
        console.log("In pro-detail : 1");
        console.log(this.id);
        console.log("In pro-detail : 2");
        console.log(this.product[0].productName);
      })
  }

  onBack():void {
    this.router.navigate(['/product']);
  }

}

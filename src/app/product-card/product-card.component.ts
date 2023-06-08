import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productDetails:any

  constructor(private router: Router){}

  redirectToDetails(){
    this.router.navigate(['product-details' , this.productDetails.id])
  }
}

import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() productList:Product[]=[]
}

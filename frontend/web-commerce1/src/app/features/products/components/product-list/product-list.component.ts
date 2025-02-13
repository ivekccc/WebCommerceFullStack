import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/model/product';
import { CardComponent } from '../../../../shared/components/card/card.component';
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

import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategory } from '../../model/product';

@Component({
  selector: 'app-most-wanted-categoty-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './most-wanted-categoty-card.component.html',
  styleUrl: './most-wanted-categoty-card.component.css'
})
export class MostWantedCategotyCardComponent {
  @Input() category:ProductCategory=new ProductCategory()
}

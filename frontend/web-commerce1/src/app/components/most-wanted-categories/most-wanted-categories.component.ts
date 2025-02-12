import { Component,Input } from '@angular/core';
import { ProductCategory } from '../../model/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MostWantedCategotyCardComponent } from "../most-wanted-categoty-card/most-wanted-categoty-card.component";

@Component({
  selector: 'app-most-wanted-categories',
  imports: [CommonModule, RouterLink, MostWantedCategotyCardComponent],
  templateUrl: './most-wanted-categories.component.html',
  styleUrl: './most-wanted-categories.component.css'
})
export class MostWantedCategoriesComponent {
  @Input() categories:ProductCategory[]=[]
}

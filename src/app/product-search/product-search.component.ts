import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
searchService=inject(SearchService);


}

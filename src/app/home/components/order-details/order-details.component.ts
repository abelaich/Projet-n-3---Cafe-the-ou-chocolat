import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})

export class OrderDetailsComponent implements OnInit {
  drink: string = ''; // Default to empty string instead of null
  size: string = ''; // Default to empty string instead of null
  sugar: boolean = false;
  whippedCream: boolean = false;
  total: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log('Received params:', params);
        this.drink = params['drink'] || ''; // Use empty string if null
        this.size = params['size'] || ''; // Use empty string if null
        this.sugar = params['sugar'] === 'true'; // Convert string 'true' to boolean
        this.whippedCream = params['whippedCream'] === 'true'; // Convert string 'true' to boolean
        this.total = Number(params['total']) || 0; // Convert string to number with a fallback
      } else {
        console.log('No query parameters received.');
      }
    });
  }

  capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

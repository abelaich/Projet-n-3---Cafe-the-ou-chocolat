import { Component, OnInit } from '@angular/core';
import { Drink, DrinkSize } from '../../data/drink';
import { DrinkRepository } from '../../repository/drink-repository';
import { PriceCalculatorService } from '../../repository/price-calculator-service.service.spec';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  drinks: Drink[] = [];
  selectedDrink: Drink | null = null;
  selectedSize: DrinkSize = DrinkSize.Small;
  sliderValue: number = 0; // Position du slider
  extras = { sugar: false, whippedCream: false };
  totalPrice: number = 0;
  balance: number = 4.70;
  isSugarDisabled: boolean = false;

  constructor(
    private priceCalculator: PriceCalculatorService,
    private drinkRepository: DrinkRepository
  ) {}

  ngOnInit() {
    this.drinks = this.drinkRepository.drinks;
    this.updateTotal();
  }

  onDrinkChange() {
    this.isSugarDisabled = this.selectedDrink?.name === 'Chocolate';
    if (this.isSugarDisabled) this.extras.sugar = false;
    this.updateTotal();
  }

  onSizeChange() {
    // Mapper la valeur du slider sur l'énumération DrinkSize
    switch (this.sliderValue) {
      case 0:
        this.selectedSize = DrinkSize.Small;
        break;
      case 1:
        this.selectedSize = DrinkSize.Medium;
        break;
      case 2:
        this.selectedSize = DrinkSize.Large;
        break;
      default:
        this.selectedSize = DrinkSize.Small;
    }
    this.updateTotal();
  }

  updateTotal() {
    if (this.selectedDrink) {
      this.totalPrice = this.priceCalculator.calculateTotal(
        this.selectedDrink,
        this.selectedSize,
        this.extras
      );
    }
  }

  purchase() {
    if (this.balance >= this.totalPrice) {
      this.balance -= this.totalPrice;
      alert(`Purchase successful! Remaining balance: ${this.balance.toFixed(2)} €`);
    } else {
      alert('Insufficient funds');
    }
  }
}
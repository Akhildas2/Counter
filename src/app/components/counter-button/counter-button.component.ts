import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';
import { MaterialModule } from '../../Material.Module';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [MaterialModule, CounterDisplayComponent, CommonModule,FormsModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  counterValue!: number;
  limit: number | null = null;
  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.store.select('counter').subscribe(data => {
      this.counterValue = data.counter;
    });
  }
  OnIncrement() {
    if (this.limit === null || this.counterValue < this.limit) {
      this.store.dispatch(increment())
    }
  }
  OnDecrement() {
    if (this.counterValue > 0) {
      this.store.dispatch(decrement())
    }
  }
  OnReset() {
    this.store.dispatch(reset())
  }
  OnSetLimit() {
    if (this.limit !== null && this.limit < this.counterValue) {
      this.counterValue = this.limit; 
    }
  }
}

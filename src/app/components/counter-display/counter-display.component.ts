import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MaterialModule } from '../../Material.Module';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) { }
  counterDisplay!: number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter >= 0 ? data.counter : 0;
    })
  }

}

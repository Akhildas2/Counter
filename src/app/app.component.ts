import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterButtonComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { MemoizationComponent } from './memoization/memoization.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, MemoizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day4angular';
}

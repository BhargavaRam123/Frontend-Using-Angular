import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',

  templateUrl: './counter.component.html',

  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = signal(0);
  getcount = computed(() => this.count() * 2);
  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    this.count.set(this.count() - 1);
  }
}

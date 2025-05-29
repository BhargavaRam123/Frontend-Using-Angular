import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-memoization',
  imports: [],
  template: `
    <div>
      <h3>Array: {{ number() }}</h3>
      <button (click)="readmultipleteimes()">Read Values 5 Times</button>
    </div>
  `,
  styleUrl: './memoization.component.css',
})
export class MemoizationComponent {
  number = signal([1, 3, 7, 9, 12, 15]);
  unrelatedvalue = signal('hello');
  expensivefiltered = computed(() => {
    console.log('filtering computation running!');
    const result = this.number().filter((n) => {
      for (let i = 0; i < 100000; i++) {}
      return n > 5;
    });
    return result;
  });
  expensivesum = computed(() => {
    console.log('sum computation running');
    return this.expensivefiltered().reduce((sum, n) => sum + n, 0);
  });
  readmultipleteimes() {
    console.log('reading computed values');
    for (let i = 0; i < 5; i++) {
      console.log(
        `Read ${i + 1}:`,
        this.expensivefiltered(),
        this.expensivesum()
      );
    }
    console.log();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div>Hola</div>
    <app-home></app-home>
  `,

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <div>Hola</div> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}

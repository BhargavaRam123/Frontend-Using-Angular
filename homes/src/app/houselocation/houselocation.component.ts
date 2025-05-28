import { Component, Input } from '@angular/core';
import { HousingLocation } from '../houselocation';
@Component({
  selector: 'app-houselocation',
  imports: [],
  templateUrl: './houselocation.component.html',
  styleUrl: './houselocation.component.css',
})
export class HouselocationComponent {
  @Input() houseLocation!: HousingLocation;
}

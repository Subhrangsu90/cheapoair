import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  imports: [],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  expandedCardIndex: number | null = null;
  @Input() flightDataList: any[] = [];
  


toggleDetails(index: number): void {
  if (this.expandedCardIndex === index) {
    this.expandedCardIndex = null; // collapse if already opened
  } else {
    this.expandedCardIndex = index; // open the clicked one
  }
}

}

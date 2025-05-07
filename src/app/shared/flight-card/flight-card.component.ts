import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  imports: [],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  flightData = {
    price: 231.99,
    pricePerMonth: 21,
    currency: 'USD',
    flights: [
      {
        type: 'departure',
        airline: 'IndiGo Airlines',
        duration: '2h 30m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/2j.gif',
        from: { code: 'CCU', time: '12:50am' },
        to: { code: 'PNQ', time: '3:20am' }
      },
      {
        type: 'return',
        airline: 'IndiGo Airlines',
        duration: '2h 35m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/2j.gif',
        from: { code: 'PNQ', time: '5:35am' },
        to: { code: 'CCU', time: '8:10am' }
      }
    ]
  };
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}

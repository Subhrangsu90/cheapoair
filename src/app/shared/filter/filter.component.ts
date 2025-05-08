import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-filter',
  imports: [SelectButtonModule, FormsModule, CheckboxModule, SliderModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  selectedStops: string[] = ['nonstop'];

  flightTimeOptions = [
    { label: 'Outbound', value: 'outbound' },
    { label: 'Return', value: 'return' }
  ];
  selectedFlightTime = 'outbound';

  flightDurationOptions = [
    { label: 'Outbound', value: 'outbound' },
    { label: 'Return', value: 'return' }
  ];
  selectedFlightDuration = 'outbound';
  departureTimeRange: number[] = [45, 1350]; // 12:45am - 10:30pm
  arrivalTimeRange: number[] = [30, 1439];   // 12:30am - 12:00am

  totalDuration: number = 1725; // 28h 45m = 1725 minutes
  layoverDuration: number = 1440; // 24h

  flexibilityOptions: string[] = [];
  departureOptions: string[] = [];
  arrivalOptions: string[] = [];
  airlineTabOptions = [
    { label: 'By Airline', value: 'airline' },
    { label: 'By Alliances', value: 'alliance' }
  ];
  selectedAirlineTab = 'airline';

  selectedAirlines: string[] = [];

  airlinesList = [
    { name: 'Air India', price: 313.99 },
    { name: 'Air-India Express', price: 227.99 },
    { name: 'Air-India Express', note: '(with others)', price: 209.41 },
    { name: 'Akasa Air', price: 214.99 },
    { name: 'Akasa Air', note: '(with others)', price: 209.41 },
    { name: 'Hahn Air Systems', price: 1204.30 },
    { name: 'IndiGo Airlines', price: 227.99 },
    { name: 'IndiGo Airlines', note: '(with others)', price: 209.41 },
    { name: 'Spicejet Airways', note: '(with others)', price: 287.99 }
  ];


}

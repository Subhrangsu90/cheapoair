import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { FlightCardComponent } from "../../shared/flight-card/flight-card.component";
import { FilterComponent } from "../../shared/filter/filter.component";

@Component({
  selector: 'app-flight-list',
  imports: [InputTextModule, FormsModule, FloatLabel, ButtonModule, NgClass, FlightCardComponent, FilterComponent],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss'
})
export class FlightListComponent {
  value2: string | undefined;
  @ViewChild('helpBox') helpBox!: ElementRef;
  @ViewChild('promoBox') promoBox!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.toggleStickyVisibility();
  }

  toggleStickyVisibility() {
    const helpBoxElement = this.helpBox.nativeElement;
    const promoBoxElement = this.promoBox.nativeElement;

    // Get the bounding rectangle of the promoBox
    const promoBoxRect = promoBoxElement.getBoundingClientRect();

    // Check if the promoBox is in the viewport
    if (promoBoxRect.top <= window.innerHeight && promoBoxRect.bottom >= 0) {
      // Hide the first sticky box if promoBox is in view
      this.renderer.setStyle(helpBoxElement, 'opacity', '0');
    } else {
      // Show the first sticky box if promoBox is not in view
      this.renderer.setStyle(helpBoxElement, 'opacity', '1');
    }
  }

  
  fontStyle = {
    label:{
      fontWeight:'700'
    }
  }
  activeTab: 'recommended' | 'cheapest' = 'recommended';

  setTab(tab: 'recommended' | 'cheapest') {
    this.activeTab = tab;
  }

  recommendedFlightDataList = [
    {
    price: 231.99,
    pricePerMonth: 21,
    currency: 'USD',
    isBest: true,
    isCheapest: false,
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
  },
  {
    price: 189.49,
    pricePerMonth: 17,
    currency: 'USD',
    isBest: false,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'AirAsia India',
        duration: '2h 20m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/nf.gif',
        from: { code: 'BLR', time: '10:15am' },
        to: { code: 'DEL', time: '12:35pm' }
      },
      {
        type: 'return',
        airline: 'AirAsia India',
        duration: '2h 25m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/nf.gif',
        from: { code: 'DEL', time: '6:40pm' },
        to: { code: 'BLR', time: '9:05pm' }
      }
    ]
  },
  {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  },
  {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  },
  {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  },
  {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  },
  {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  }, {
    price: 254.75,
    pricePerMonth: 23,
    currency: 'USD',
    isBest: true,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'SpiceJet',
        duration: '2h 10m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'MAA', time: '7:30am' },
        to: { code: 'BOM', time: '9:40am' }
      },
      {
        type: 'return',
        airline: 'SpiceJet',
        duration: '2h 15m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/ny.gif',
        from: { code: 'BOM', time: '8:20pm' },
        to: { code: 'MAA', time: '10:35pm' }
      }
    ]
  }
  ];

  cheapestFlightDataList = [{
    price: 281.09,
    pricePerMonth: 27,
    currency: 'USD',
    isBest: false,
    isCheapest: true,
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
  },
  {
    price: 289.49,
    pricePerMonth: 18,
    currency: 'USD',
    isBest: false,
    isCheapest: true,
    flights: [
      {
        type: 'departure',
        airline: 'AirAsia India',
        duration: '2h 20m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/nf.gif',
        from: { code: 'BLR', time: '10:15am' },
        to: { code: 'DEL', time: '12:35pm' }
      },
      {
        type: 'return',
        airline: 'AirAsia India',
        duration: '2h 25m',
        stops: 'Non stop',
        logo: 'assets/airlines_logo/nf.gif',
        from: { code: 'DEL', time: '6:40pm' },
        to: { code: 'BLR', time: '9:05pm' }
      }
    ]
  },

 
  ];
}

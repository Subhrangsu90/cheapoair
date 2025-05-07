import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  imports: [InputTextModule, FormsModule, FloatLabel,ButtonModule,NgClass],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss'
})
export class FlightListComponent {
  value2: string | undefined;

  fontStyle = {
    label:{
      fontWeight:'700'
    }
  }
  activeTab: 'recommended' | 'cheapest' = 'recommended';

  setTab(tab: 'recommended' | 'cheapest') {
    this.activeTab = tab;
  }
}

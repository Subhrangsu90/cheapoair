import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';


@Component({
  selector: 'app-header',
  imports: [ButtonModule,PopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isFlightTypeVisible = false;
  constructor(private eRef: ElementRef) {}

  buttonStyle={
    label:{
      fontWeight: '700',
    },
    text:{
      secondary:{
        color: '#313541',
      }
    },
    sm:{
      fontSize: '0.75rem',
    }
  }
  iconSize={
    size:'0.5rem'
  }
  openDialog() {
    console.log('openDialog');
  }

  isOverlayVisible = false;

  showOverlay(event: Event) {
    event.stopPropagation();
    this.isOverlayVisible = true;
  }
  

  // Call this to hide overlay
  hideOverlay() {
    this.isOverlayVisible = false;
  }

  // Optional: Toggle method
  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

//   @HostListener('document:click', ['$event.target'])
// onClickOutside(targetElement: HTMLElement) {
//   const clickedInside = targetElement.closest('.advance-search-part');
//   if (!clickedInside) {
//     this.hideOverlay();
//   }
// }

}

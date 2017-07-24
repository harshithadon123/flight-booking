import { Component } from '@angular/core';

@Component({
  selector: 'flight-booking-app',
  template: `
    <div class="mat-typography">
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }

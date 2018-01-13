import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  template: `
    <div class="mat-typography">
      <app-nav-bar></app-nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  {
  name = 'Angular';
}

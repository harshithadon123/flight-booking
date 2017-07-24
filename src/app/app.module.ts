import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MOMENT_TOKEN } from './shared/services/moment.service';

import { ConfigService } from './shared/services/config.service';
import { MaterialModule } from './material.module';
import { appRoutes } from './app.routes';
import { AppComponent }  from './app.component';
import { NavBarComponent } from './shared/nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

declare let moment: any;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  providers: [
    ConfigService,
    { provide: MOMENT_TOKEN, useValue: moment }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

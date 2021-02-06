import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeQueryComponent } from './home-query/home-query.component';

import { StationsService } from './services/stations.service';
import { HttpRetrieveService } from './services/http-retrieve.service';
import { baseURL } from './shared/baseurl';
import { HistoricalComponent } from './historical/historical.component';
import { ForecastingComponent } from './forecasting/forecasting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeQueryComponent,
    HistoricalComponent,
    ForecastingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StationsService,
    {
      provide:'BaseURL', useValue: baseURL
    },
    HttpRetrieveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

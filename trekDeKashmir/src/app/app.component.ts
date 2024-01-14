import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  { NavbarComponent } from "./Components/navbar/navbar.component";
import { HeroComponent } from "./Components//hero/hero.component"
import { PackagesComponent } from "./Components/packages/packages.component"
import { DreamDestinationComponent } from "./Components/dream-destination/dream-destination.component"
import { VisitingAttractionsComponent } from "./Components/visiting-attractions/visiting-attractions.component"
import { BookingFormComponent } from "./Components/booking-form/booking-form.component"
import { BookingProcessComponent } from './Components/booking-process/booking-process.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, PackagesComponent, 
    DreamDestinationComponent, VisitingAttractionsComponent, BookingFormComponent, BookingProcessComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trekDeKashmir';
}

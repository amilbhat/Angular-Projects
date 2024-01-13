import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  { NavbarComponent } from "./Components/navbar/navbar.component";
import { HeroComponent } from "./Components//hero/hero.component"
import { PackagesComponent } from "./Components/packages/packages.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, PackagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trekDeKashmir';
}

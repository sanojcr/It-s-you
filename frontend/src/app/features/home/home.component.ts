import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isMbDrawerOpen = true;

  constructor() {
  }

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  scrollToSection(comp: string) {
    const target = document.querySelector(comp);
    if (target) {
      this.isMbDrawerOpen = !this.isMbDrawerOpen; 
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Target section is undefined');
    }
  }

  scrollToTop() {
    const target = document.querySelector('app-me');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Target section is undefined');
    }
  }
}

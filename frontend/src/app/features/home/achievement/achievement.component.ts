import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent implements OnInit {

  intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => this.slideRight(), 5000);
  }

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  testimonials = [
    { type:"Appreciation", text: "Amazing service and support! Highly recommended.", author: "John Doe", role: "CEO, Company" },
    { type:"Appreciation", text: "Exceeded our expectations with quality and delivery.", author: "Jane Smith", role: "Product Manager" },
    { type:"Appreciation", text: "My name is ghan people calls me what the fuck.", author: "Alice Brown", role: "Director, Company" },
    { type:"Appreciation", text: "He is a higly dedicated guy.", author: "Alice Brown", role: "Director, Company" },
    { type:"Appreciation", text: "He is really good at talking to girls.", author: "Alice Brown", role: "Director, Company" },
    { type:"Appreciation", text: "Next level coding, people will find out versetality of codes.", author: "Alice Brown", role: "Director, Company" },
    { type:"Appreciation", text: "Their team was professional and efficient.", author: "Alice Brown", role: "Director, Company" }
  ];

  currentIndex = 0;
  cardWidth: number = 0;


  slideRight() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else {
      this.currentIndex = this.testimonials.length - 1;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

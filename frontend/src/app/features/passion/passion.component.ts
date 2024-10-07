import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-passion',
  templateUrl: './passion.component.html',
  styleUrl: './passion.component.scss'
})
export class PassionComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }
}

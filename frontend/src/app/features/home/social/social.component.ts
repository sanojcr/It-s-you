import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

  
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }
}

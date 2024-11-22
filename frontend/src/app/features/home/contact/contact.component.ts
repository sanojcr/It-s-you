import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  recipientEmail: string = 'sanojcr97@gmail.com';
  
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }
}

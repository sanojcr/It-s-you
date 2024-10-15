import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent implements OnInit {

  recipientEmail: string = 'sanojcr97@gmail.com';
  subject: string = 'I would like to hire service';
  body: string = 'Hi Sanoj,';

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  hireMe(){
    this.sendEmail();
  }

  sendEmail(): void {
    const mailtoLink = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    window.location.href = mailtoLink;
  }
}

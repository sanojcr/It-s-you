import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  resume(){
    this.downloadPDF();
  }

  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = 'assets/resumes/sanoj_resume_24.pdf';
    link.download = 'it\'s-you-sanoj-resume';
    link.click();
  }

}

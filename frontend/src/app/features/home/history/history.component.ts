import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { JobHistory } from '../../../models/job-history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {

  jobHistories: JobHistory[] = [
    {
      start: "Mar 08, 2023",
      end: "Present",
      company: "SLK Software, Bangalore",
      designation: "Senior Software Engineer",
      description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      role: ".Net Full Stack"
    },
    {
      start: "Aug 17, 2020",
      end: "Mar 03, 2023",
      company: "Edify Technologies India Pvt Ltd., Chennai",
      designation: "Programmer Analyst",
      description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      role: ".Net Full Stack"
    },
    {
      start: "Feb 04, 2020",
      end: "Jul 03, 2020",
      company: "Capgemini, Bangalore",
      designation: "Trainee",
      description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      role: ".Net Full Stack"
    }

  ];

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

}

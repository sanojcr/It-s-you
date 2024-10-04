import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONSTANTS, AppConstants } from '../app.constants';
import { TranslateService } from '../services/translate.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent implements OnInit {

  constructor(
    private translationService: TranslateService,
    @Inject(APP_CONSTANTS) private constants: AppConstants
  ) {
    console.log(constants.appName);
  }

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  setLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
  }
}

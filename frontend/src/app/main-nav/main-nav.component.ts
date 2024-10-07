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

  isDarkMode = false;
  selectedLanguage = 'en';

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
    this.selectedLanguage = lang;
    this.translationService.setLanguage(lang);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

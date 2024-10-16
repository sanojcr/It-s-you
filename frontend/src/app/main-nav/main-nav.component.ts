import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONSTANTS, AppConstants } from '../app.constants';
import { TranslateService } from '../services/translate.service';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent implements OnInit {

  selectedLanguage = 'en';

  constructor(
    private translationService: TranslateService,
    @Inject(APP_CONSTANTS) private constants: AppConstants,
    private router: Router,
    private theme: ThemeService
  ) {
    console.log(constants.appName);
  }

  ngOnInit(): void {
    initFlowbite();
    this.isDarkMode = true;
    this.toggleDarkMode();
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

  navigateToRoute(route: string): void {
    this.router.navigate([route]).then(() => {
      const backdrop = document.querySelector('[drawer-backdrop]') as HTMLDivElement;
      backdrop.click();
      console.log(`navigated to ${route}`);
    }).catch((err) => {
      console.error(`error navigating to ${route}:`, err);
    });
  }

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }

  get isDarkMode(): boolean {
    return this.theme.isDarkMode;
  };

  set isDarkMode(value: boolean) {
    this.theme.isDarkMode = value;
  };
  
}

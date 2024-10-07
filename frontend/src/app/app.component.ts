import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from './services/translate.service';
import { APP_CONSTANTS, AppConstants } from './app.constants';
import { initFlowbite } from 'flowbite';
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
  
} from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'frontend';

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  constructor(
    private translationService: TranslateService,
    @Inject(APP_CONSTANTS) private constants: AppConstants
  ) {
    console.log(constants.appName);
  }



}

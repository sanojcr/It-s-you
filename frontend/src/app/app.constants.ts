import { InjectionToken } from "@angular/core";

export const APP_CONSTANTS = new InjectionToken<AppConstants>('app.constants');

export interface AppConstants {
  appVersion: string;
  appName: string;
}

export const AppConstants = {
  provide: APP_CONSTANTS,
  useValue: {
    appVersion: '1.0.0',
    appName: 'It\'s You - Sanoj C R'
  }
};
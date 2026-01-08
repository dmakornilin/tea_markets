import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgbModule),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    // provideClientHydration(),
    // provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // Включаем HttpClient с поддержкой fetch
  ]
};

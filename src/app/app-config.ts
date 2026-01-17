import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
	type ApplicationConfig,
	provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '@app/app-routes';

// import { provideRouter } from '@angular/router';
// import { routes } from '@app/app-routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideHttpClient(
			withInterceptors([
				// progressbarInterceptor,
				// snackbarInterceptor,
				// articleAppInterceptor,
				// errorInterceptor,
			]),
		),
		provideRouter(routes),
	],
};

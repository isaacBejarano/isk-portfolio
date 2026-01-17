import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "@app/app";
import { appConfig } from "@app/app-config";

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, {
//     applicationProviders: [provideZoneChangeDetection()],
//   })
//   .catch((err) => console.error(err));

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

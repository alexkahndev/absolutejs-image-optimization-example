window.__HMR_FRAMEWORK__ = "angular";
import "/home/alexkahn/abs/absolutejs/src/dev/client/handlers/angularRuntime.ts";
import "/home/alexkahn/abs/absolutejs/src/dev/client/hmrClient.ts";

import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import AngularImageDemoComponent from '../pages/angular-image-demo.js';

// Re-Bootstrap HMR with View Transitions API
if (window.__ANGULAR_APP__) {
    try { window.__ANGULAR_APP__.destroy(); } catch (_err) { /* ignore */ }
    window.__ANGULAR_APP__ = null;
}

// Ensure root element exists after destroy (Angular removes it)
var _sel = AngularImageDemoComponent.ɵcmp?.selectors?.[0]?.[0] || 'ng-app';
if (!document.querySelector(_sel)) {
    (document.getElementById('root') || document.body).appendChild(document.createElement(_sel));
}

var providers = [provideZonelessChangeDetection()];
if (!window.__HMR_SKIP_HYDRATION__) {
    providers.push(provideClientHydration());
}
delete window.__HMR_SKIP_HYDRATION__;

bootstrapApplication(AngularImageDemoComponent, {
    providers: providers
}).then(function (appRef) {
    window.__ANGULAR_APP__ = appRef;
});
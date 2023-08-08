import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { getAuth, provideAuth, connectAuthEmulator } from '@angular/fire/auth';
import { getStorage, provideStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { environment } from 'src/environments/environment';
import { provideRouter } from '@angular/router';

const provideFirebase = () => importProvidersFrom([
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => {
    const auth = getAuth();
    if (environment.useEmulators) {
      connectAuthEmulator(auth, 'http://localhost:9099');
    }
    return auth;
  }),
  provideFirestore(() => {
    const firestore = getFirestore();
    if (environment.useEmulators) {
      connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
    return firestore;
  }),
  provideFunctions(() => {
    const functions = getFunctions();
    if (environment.useEmulators) {
      connectFunctionsEmulator(functions, 'localhost', 5001);
    }
    return functions;
  }),
  provideStorage(() => {
    const storage = getStorage();
    if (environment.useEmulators) {
      connectStorageEmulator(storage, 'localhost', 9199);
    }
    return storage;
  }),
]);

export const appConfig: ApplicationConfig = {
  providers: [provideFirebase(), provideRouter(routes)]
};

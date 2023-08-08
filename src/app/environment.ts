export interface Environment {
  useEmulators: boolean;
  production: boolean;
  firebase: {
    projectId: string;
    appId: string;
    storageBucket: string;
    locationId: string;
    apiKey: string;
    authDomain: string
    messagingSenderId: string;
    measurementId?: string;
  }
}

export const blankEnvironment: Environment = {
  useEmulators: false,
  production: false,
  firebase: {
    projectId: '',
    appId: '',
    storageBucket: '',
    locationId: '',
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
    measurementId: ''
  }
}

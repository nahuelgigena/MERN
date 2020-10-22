import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from '../cliente/src/App';
import * as ServiceWorker from '../cliente/src/serviceWorker';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from '../firebase-config';


ReactDOM.render ((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'conectando la app'}>
      <App />
    </Suspense>
    </FirebaseAppProvider>
), document.getElementById('root'));





ServiceWorker.unregister();
//pour linker firebase to notre application 
//nous avons installer AngularFire et pour l'utiliser on doit  l'importer ici

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//config de firebase ///
const firebaseConfig = {
  apiKey: "AIzaSyDMoNHjYuyulx9BA0fLQzN6A_bnjhv76zU",
  authDomain: "meryem-stodo.firebaseapp.com",
  projectId: "meryem-stodo",
  storageBucket: "meryem-stodo.appspot.com",
  messagingSenderId: "307770176833",
  appId: "1:307770176833:web:d2d3e5d3c6b89c939a5dc0",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  ...
  imports: [
      ...
      AngularFireModule.initializeApp(firebaseConfig), 
      AngularFireAuthModule, 
      AngularFirestoreModule
  ]
})
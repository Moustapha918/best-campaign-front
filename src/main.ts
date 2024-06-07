import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {Amplify} from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import {I18n} from 'aws-amplify/utils'
import {dict} from "./app/i18n/dictionnary";

Amplify.configure(amplifyconfig);
I18n.setLanguage('fr');
I18n.putVocabularies(dict);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

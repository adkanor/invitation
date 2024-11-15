import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en:{
    translation:{
      "welcome": 'Welcome!'
    }
  },
  ru:{
    translation:{
      "welcome": 'Добро пожаловать !'

    }
  }, 
  ua:{
    translation:{
      "welcome": 'Витаю!'

    }
  }
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng:'ua',
    debug: true,

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;
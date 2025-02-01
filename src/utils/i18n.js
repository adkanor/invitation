import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './translationEng.json';
import ukTranslation from './translationUa.json';
import ruTranslation from './translationRu.json';

const storedLang = localStorage.getItem('language');

const language = storedLang && ['ru', 'ua', 'en'].includes(storedLang) ? storedLang : 'ru';

const resources = {
  en: {
    translation: enTranslation,
   
  },
  ru: {
    translation: ruTranslation,

    
  },
  ua: {
    translation: ukTranslation,
    
  },

};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
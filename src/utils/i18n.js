import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      welcome: 'Welcome!',
      venueTitle: "Venue of Our Celebration",
      venueDescription: "The place we chose for our wedding is the Kozi Grod hotel and restaurant. We chose this venue not by chance: it offers the perfect combination of beautiful interiors and exquisite cuisine that will make our day even more special.",
      venueAddress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "How to get there?",
      transportation: "You can only reach Kozi Grod by private transport or taxi. We've also prepared a map for you to make your journey easier and quicker!",
    },
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать!',
      venueTitle: "Место проведения нашего праздника",
      venueDescription: "Место, которое мы выбрали для нашей свадьбы — отель и ресторан Kozi Grod. Мы выбрали это место не случайно: здесь идеальное сочетание прекрасных интерьеров и изысканной кухни, которые сделают наш день еще более особенным.",
      venueAddress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "Как добраться?",
      transportation: "Вы можете добраться до Kozi Grod только на собственном транспорте или такси. Мы также подготовили карту, чтобы путь был проще и быстрее!",
    },
  },
  ua: {
    translation: {
      welcome: 'Вітаю!',
      venueTitle: "Місце проведення нашого святкування",
      venueDescription: "Місце, яке ми обрали для нашого весілля — готель та ресторан Kozi Grod. Ми вибрали це місце не випадково: тут ідеальне поєднання чудових інтер'єрів та вишуканої кухні, які зроблять наш день ще більш особливим.",
      venueAddress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "Як дістатися?",
      transportation: "До Kozi Grod можна дістатися лише на власному транспорті або таксі. Ми також підготували карту, щоб шлях був зручним і швидким!",
    },
  },
};
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
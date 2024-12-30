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
      venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "How to get there?",
      transportation: "You can only reach Kozi Grod by private transport or taxi. We've also prepared a map for you to make your journey easier and quicker!",
      dresscodeTitle: "Dress Code",
      dresscodeNotRequired: "The dress code is not mandatory! ",
      dresscodeDescription: "We’re simply sharing our preferences to help you feel more comfortable.",
      agendaTitle: "Celebration Agenda",
      guestMeeting: "Guest meeting",
      guestMeetingDescription: "It’s the perfect time for guests to mingle and enjoy each other's company before the ceremony starts.",
      marriageCeremony: "Marriage ceremony",
      marriageCeremonyDescription: "The official wedding ceremony where we will exchange vows and begin our journey together as a married couple.",
      weddingDinner: "Wedding dinner",
      weddingDinnerDescription: "A delicious wedding dinner to celebrate our love, with food, drinks, and laughter shared among friends and family.",
      dancing: "Dancing",
      dancingDescription: "An evening of dancing, where we invite everyone to join us in celebrating the start of our new life together"

    },
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать!',
      venueTitle: "Место проведения нашего праздника",
      venueDescription: "Место, которое мы выбрали для нашей свадьбы — отель и ресторан Kozi Grod. Мы выбрали это место не случайно: здесь идеальное сочетание прекрасных интерьеров и изысканной кухни, которые сделают наш день еще более особенным.",
      venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "Как добраться?",
      transportation: "Вы можете добраться до Kozi Grod только на собственном транспорте или такси. Мы также подготовили карту, чтобы путь был проще и быстрее!",
      dresscodeTitle: "Дресс-код",
      dresscodeNotRequired: "Дресс-код не обязателен!",
      dresscodeDescription: "Мы просто делимся нашими предпочтениями, чтобы вам было комфортнее.",
      agendaTitle: "Программа празднования",
      guestMeeting: "Встреча гостей",
      guestMeetingDescription: "Это идеальное время, чтобы гости могли пообщаться и насладиться компанией друг друга до начала церемонии.",
      marriageCeremony: "Церемония",
      marriageCeremonyDescription: "Официальная свадебная церемония, на которой мы обменяемся клятвами и начнем наше путешествие вместе как муж и жена.",
      weddingDinner: "Свадебный ужин",
      weddingDinnerDescription: "Вкусный свадебный ужин в честь нашей любви, с едой, напитками и смехом, разделёнными с друзьями и семьей.",
      dancing: "Танцы",
      dancingDescription: "Вечер танцев, где мы приглашаем всех присоединиться к нам в праздновании начала нашей новой жизни вместе!"

    },
  },
  ua: {
    translation: {
      welcome: 'Вітаю!',
      venueTitle: "Місце проведення нашого святкування",
      venueDescription: "Місце, яке ми обрали для нашого весілля — готель та ресторан Kozi Grod. Ми вибрали це місце не випадково: тут ідеальне поєднання чудових інтер'єрів та вишуканої кухні, які зроблять наш день ще більш особливим.",
      venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
      howToGet: "Як дістатися?",
      transportation: "До Kozi Grod можна дістатися лише на власному транспорті або таксі. Ми також підготували карту, щоб шлях був зручним і швидким!",
      dresscodeTitle: "Дрес-код",
      dresscodeNotRequired: "Дрес-код не обов'язковий!",
      dresscodeDescription: "Ми лише ділимося нашими вподобаннями, щоб вам було зручніше.",
      agendaTitle: "План святкування",
      guestMeeting: "Зустріч гостей",
      guestMeetingDescription: "Чудова нагода для гостей поспілкуватися і насолодитися компанією один одного перед початком церемонії",
      marriageCeremony: "Церемонія",
      marriageCeremonyDescription: "Офіційна весільна церемонія, де ми обміняємось обітницями та починаємо нашу подорож разом як подружжя.",
      weddingDinner: "Весільна вечеря",
      weddingDinnerDescription: "Смачний весільний обід на честь нашої любові, з їжею, напоями та сміхом, поділеними з друзями та родиною.",
      dancing: "Танці",
      dancingDescription: "Вечір танців, на який ми запрошуємо всіх приєднатися до святкування початку нашого нового життя разом!"
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
    lng: 'ua',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
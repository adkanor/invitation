import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './translationEng.json';
import ukTranslation from './translationUa.json';
import ruTranslation from './translationRu.json';

const resources = {
  en: {
    translation: enTranslation,
    // translation: {
    //   welcome: 'Welcome!',
    //   headerHello: "Hello",
    //   headerDescription:'This is us — Katya and Lesha. Two completely different worlds that came together in one. Each photo here is a piece of our story, which we are happy to share with you. Our journey is just beginning, and you are a big part of it!',
    //   venueTitle: "Venue of Our Celebration",
    //   venueDescription: "The place we chose for our wedding is the Kozi Grod hotel and restaurant. We chose this venue not by chance: it offers the perfect combination of beautiful interiors and exquisite cuisine that will make our day even more special.",
    //   venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
    //   howToGet: "How to get there?",
    //   transportation: "You can only reach Kozi Grod by private transport or taxi. We've also prepared a map for you to make your journey easier and quicker!",
    //   dresscodeTitle: "Dress Code",
    //   dresscodeNotRequired: "The dress code is not mandatory! ",
    //   dresscodeDescription: "We’re simply sharing our preferences to help you feel more comfortable.",
    //   agendaTitle: "Celebration Agenda",
    //   guestMeeting: "Guest meeting",
    //   guestMeetingDescription: "It’s the perfect time for guests to mingle and enjoy each other's company before the ceremony starts.",
    //   marriageCeremony: "Marriage ceremony",
    //   marriageCeremonyDescription: "The official wedding ceremony where we will exchange vows and begin our journey together as a married couple.",
    //   weddingDinner: "Wedding dinner",
    //   weddingDinnerDescription: "A delicious wedding dinner to celebrate our love, with food, drinks, and laughter shared among friends and family.",
    //   dancing: "Dancing",
    //   dancingDescription: "An evening of dancing, where we invite everyone to join us in celebrating the start of our new life together",
    //   happyToSeeYou: "We will be happy to see you! ",
    //   rsvpTitle: "RSVP",
    //   rsvpAreYouComming: "will you come?",
    //   rsvpKindlyReply: "Kindly reply by 1st of April",
    //   rsvpDescription: "Сподываэмося ти зможеш бути з нами! Будь ласка, підтверди свою участь та пройди опитування, щоб допомогти нам краще підготуватися.",
    //   confirmAttendanceText: "We need to confirm your attendance.",
    //   participateInSurvey: "Please take a quick survey to help us prepare better.",
    //   confirmAndSurveyButton: "Confirm and Take Survey",
    //   plan: "Plan",
    //   venue: "Venue",
    //   dressCode: "Dress Code",
    //   invitation: "Invitation",
    //   modalTitle: "Please confirm your attendance at the celebration",
    //   modalSubTitle: "Your answers will greatly help us in organizing the wedding",
    //   modalWillComeLabel: "Confirm attendance",
    //   modalWillComeOptionYes: "I will come",
    //   modalWillComeOptionNo: "I will not come",
    //   modalWillComeOptionAnother: "I am unsure",
    //   modalWhatToDrinkTitle: "Your drink preferences?",
    //   modalWhatToDrinkOptionWine: "Wine",
    //   modalWhatToDrinkOptionVodka: "Vodka",
    //   modalWhatToDrinkOptionWhiskey: "Whiskey",
    //   modalWhatToDrinkOptionChampane: "Champagne",
    //   modalWhatToDrinkOptionCoctails: "Sweet cocktails",
    //   modalWhatToDrinkOptionNonAlcohol: "Something non-alcoholic",
    //   modalWhatToDrinkNote: "We will choose drinks based on the preferences of the majority.",
    //   modalMusicTitle: "What song would you like us to play for you?",
    //   modalMusicPlaceholder: "Leave a link or enter the song title",
    //   modalNeedHelp: "Do you need help getting to the wedding venue or assistance with accommodation?",
    //   modalNeedHelpOptionYes: "Yes",
    //   modalNeedHelpOptionNo: "No",
    //   modalSendButton: "Send",
    //   modalNeedPlusOne:"Do you need +1 invite?",
    //   modalPlusOneYes: "Yes",
    //   modalPlusOneNo:'No',
    //   modalPlusOneName:"Enter person's name",
    //   modalPlusOneAge:"Enter person's age"
    // },
  },
  ru: {
    translation: ruTranslation,

    // translation: {
    //   welcome: 'Добро пожаловать!',
    //   venueTitle: "Место проведения нашего праздника",
    //   venueDescription: "Место, которое мы выбрали для нашей свадьбы — отель и ресторан Kozi Grod. Мы выбрали это место не случайно: здесь идеальное сочетание прекрасных интерьеров и изысканной кухни, которые сделают наш день еще более особенным.",
    //   venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
    //   howToGet: "Как добраться?",
    //   transportation: "Вы можете добраться до Kozi Grod только на собственном транспорте или такси. Мы также подготовили карту, чтобы путь был проще и быстрее!",
    //   dresscodeTitle: "Дресс-код",
    //   dresscodeNotRequired: "Дресс-код не обязателен!",
    //   dresscodeDescription: "Мы просто делимся нашими предпочтениями, чтобы вам было комфортнее.",
    //   agendaTitle: "Программа празднования",
    //   guestMeeting: "Встреча гостей",
    //   guestMeetingDescription: "Это идеальное время, чтобы гости могли пообщаться и насладиться компанией друг друга до начала церемонии.",
    //   marriageCeremony: "Церемония",
    //   marriageCeremonyDescription: "Официальная свадебная церемония, на которой мы обменяемся клятвами и начнем наше путешествие вместе как муж и жена.",
    //   weddingDinner: "Свадебный ужин",
    //   weddingDinnerDescription: "Вкусный свадебный ужин в честь нашей любви, с едой, напитками и смехом, разделёнными с друзьями и семьей.",
    //   dancing: "Танцы",
    //   dancingDescription: "Вечер танцев, где мы приглашаем всех присоединиться к нам в праздновании начала нашей новой жизни вместе!",
    //   happyToSeeYou: "Мы будем рады вас видеть!",
    //   rsvpTitle: "RSVP",
    //   rsvpAreYouComming: "Are you comming?",
    //   rsvpKindlyReply: "Kindly reply by 1st of April",
    //   rsvpDescription: "Наша весілля наближається, і ми хочемо переконатися, що ти зможеш бути з нами. Будь ласка, підтверди свою участь та пройди невелике опитування, щоб допомогти нам краще підготуватися.",
    //   confirmAttendanceText: "Нам нужно подтвердить ваше присутствие.",
    //   participateInSurvey: "Пожалуйста, пройдите небольшой опрос, чтобы помочь нам лучше подготовиться.",
    //   confirmAndSurveyButton: "Подтвердить и пройти опрос",
    //   plan: "План",
    //   venue: "Место проведения",
    //   dressCode: "Дресс код",
    //   invitation: "Приглашение"
    // }
  },
  ua: {
    translation: ukTranslation,
    
    // translation: {
    //   welcome: 'Вітаю!',
    //   venueTitle: "Місце проведення нашого святкування",
    //   venueDescription: "Місце, яке ми обрали для нашого весілля — готель та ресторан Kozi Grod. Ми вибрали це місце не випадково: тут ідеальне поєднання чудових інтер'єрів та вишуканої кухні, які зроблять наш день ще більш особливим.",
    //   venueAdress: "Lesnikow Street 3, 83-047 Pomlewo, PL",
    //   howToGet: "Як дістатися?",
    //   transportation: "До Kozi Grod можна дістатися лише на власному транспорті або таксі. Ми також підготували карту, щоб шлях був зручним і швидким!",
    //   dresscodeTitle: "Дрес-код",
    //   dresscodeNotRequired: "Дрес-код не обов'язковий!",
    //   dresscodeDescription: "Ми лише ділимося нашими вподобаннями, щоб вам було зручніше.",
    //   agendaTitle: "План святкування",
    //   guestMeeting: "Зустріч гостей",
    //   guestMeetingDescription: "Чудова нагода для гостей поспілкуватися і насолодитися компанією один одного перед початком церемонії",
    //   marriageCeremony: "Церемонія",
    //   marriageCeremonyDescription: "Офіційна весільна церемонія, де ми обміняємось обітницями та починаємо нашу подорож разом як подружжя.",
    //   weddingDinner: "Весільна вечеря",
    //   weddingDinnerDescription: "Смачний весільний обід на честь нашої любові, з їжею, напоями та сміхом, поділеними з друзями та родиною.",
    //   dancing: "Танці",
    //   dancingDescription: "Вечір танців, на який ми запрошуємо всіх приєднатися до святкування початку нашого нового життя разом!",
    //   happyToSeeYou: "Ми будемо раді вас бачити!",
    //   rsvpTitle: "RSVP",
    //   rsvpAreYouComming: "Are you comming?",
    //   rsvpKindlyReply: "Kindly reply by 1st of April",
    //   rsvpDescription: "Наша весілля наближається, і ми хочемо переконатися, що ти зможеш бути з нами. Будь ласка, підтверди свою участь та пройди невелике опитування, щоб допомогти нам краще підготуватися.",
    //   confirmAttendanceText: "Ми були б дуже хотіли тебе бачити в наш особливий день!",
    //   participateInSurvey: "Будь ласка, пройди коротке опитування, щоб допомогти нам краще підготуватися.",
    //   confirmAndSurveyButton: "Підтвердити та пройти опитування",
    //   plan: "План",
    //   venue: "Місце проведення",
    //   dressCode: "Дресс код",
    //   invitation: "Запрошення",
    //   modalTitle: "Будь ласка, підтвердьте свою участь у святі",
    //   modalSubTitle: "Ваші відповіді дуже допоможуть нам у організації весілля",
    //   modalWillComeLabel: "Підтвердіть участь",
    //   modalWillComeOptionYes: "Я прийду",
    //   modalWillComeOptionNo: "Я не прийду",
    //   modalWillComeOptionAnother: "Не можу відповісти",
    //   modalWhatToDrinkTitle: "Ваші уподобання щодо напоїв?",
    //   modalWhatToDrinkOptionWine: "Вино",
    //   modalWhatToDrinkOptionVodka: "Водка",
    //   modalWhatToDrinkOptionWhiskey: "Віскі",
    //   modalWhatToDrinkOptionChampane: "Шампанське",
    //   modalWhatToDrinkOptionCoctails: "Солодкі коктейлі",
    //   modalWhatToDrinkOptionNonAlcohol: "Щось безалкогольне",
    //   modalWhatToDrinkNote: "Ми виберемо напої згідно з уподобаннями більшості.",
    //   modalMusicTitle: "Яку пісню ви хочете, щоб ми включили для вас?",
    //   modalMusicPlaceholder: "Залиште посилання або введіть назву пісні",
    //   modalNeedHelp: "Чи потрібна вам допомога з доїздом до місця проведення весілля або допомога з проживанням?",
    //   modalNeedHelpOptionYes: "Так",
    //   modalNeedHelpOptionNo: "Ні",
    //   modalSendButton: "Відправити"
    // }
  },

};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ua',
    lng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
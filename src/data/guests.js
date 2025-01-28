const guests = [
  {
    id: '5679',
    info: 'Дорогой гость',
    name: {
      ru: 'Дорогой гость, ты придешь?',
      ua: 'Шановний гість, ти прийдеш?',
      en: 'Dear guest, will you come?'
    }
  },
  {
    id: '5680',
    info: 'Оксана Горобченко',
    name: {
      ru: '',
      ua: '',
      en: ''
    }
  },
  {
    id: '5681',
    info: 'Алексей Белинский',
    name: {
      ru: '',
      ua: '',
      en: ''
    }
  },
  {
    id: '5682',
    info: 'Inna Mordovtseva',
    name: {
      ru: 'Мамуля, ты придешь?',
      ua: 'Мамуля, ти прийдеш?',
      en: 'Mom, will you come?'
    }
  },
  {
    id: '5683',
    info: 'Рита Кортун',
    name: {
      ru: 'Рита, ты придешь?',
      ua: 'Ріта, ти прийдеш?',
      en: 'Rita, will you come?'
    }
  },
  {
    id: '5684',
    info: 'Ирина Кортун',
    name: {
      ru: 'Ира, ты придешь?',
      ua: 'Іра, ти прийдеш?',
      en: 'Iryna, will you come?'
    }
  },
  {
    id: '5685',
    info: 'Катерина Хорсаженко',
    name: {
      ru: 'Катюша, ты придешь?',
      ua: 'Катюша, ти прийдеш?',
      en: 'Kateryna, will you come?'
    }
  },
  {
    id: '5686',
    info: 'Богдан Мартыненко',
    name: {
      ru: 'Богдан, ты придешь?',
      ua: 'Богдан, ти прийдеш?',
      en: 'Bogdan, will you come?'
    }
  },
  {
    id: '5688',
    info: 'Дарина Стуканева',
    name: {
      ru: 'Дарина, ты придешь?',
      ua: 'Дарина, ти прийдеш?',
      en: 'Darina, will you come?'
    }
  },
  {
    id: '5690',
    info: 'Максим Мальцев',
    name: {
      ru: 'Максим, ты придешь?',
      ua: 'Максим, ти прийдеш?',
      en: 'Maxim, will you come?'
    }
  },
  {
    id: '5691',
    info: 'Диана Мальцева',
    name: {
      ru: 'Диана, ты придешь?',
      ua: 'Диана, ти прийдеш?',
      en: 'Diana, will you come?'
    }
  },
  {
    id: '5692',
    info: 'Женя Губарев',
    name: {
      ru: 'Женя, ты придешь?',
      ua: 'Женя, ти прийдеш?',
      en: 'Zhenya, will you come?'
    }
  },
  {
    id: '5694',
    info: 'Давид',
    name: {
      ru: 'Давид, ты придешь?',
      ua: 'Давид, ти прийдеш?',
      en: 'David, will you come?'
    }
  },
  {
    id: '5697',
    info: 'Паша Мордовцев',
    name: {
      ru: 'Паша, ты придешь?',
      ua: 'Паша, ти прийдеш?',
      en: 'Pasha, will you come?'
    }
  },
  {
    id: '5698',
    info: 'Наташа Мордовцева',
    name: {
      ru: 'Наташа, ты придешь?',
      ua: 'Наташа, ти прийдеш?',
      en: 'Natasha, will you come?'
    }
  },
  {
    id: '5699',
    info: 'Кирил',
    name: {
      ru: 'Кирилл, ты придешь?',
      ua: 'Кирило, ти прийдеш?',
      en: 'Kirill, will you come?'
    }
  },
  {
    id: '5700',
    info: 'Никита мой брат',
    name: {
      ru: 'Никита, ты придешь?',
      ua: 'Микита, ти прийдеш?',
      en: 'Nikita, will you come?'
    }
  },
  {
    id: '5706',
    info: 'Петер',
    name: {
      ru: 'Петер, ты придешь?',
      ua: 'Петер, ти прийдеш?',
      en: 'Peter, will you come?'
    }
  },
  {
    id: '5707',
    info: 'Роджер',
    name: {
      ru: 'Роджер, ты придешь?',
      ua: 'Роджер, ти прийдеш?',
      en: 'Roger, will you come?'
    }
  },
  {
    id: '5708',
    info: 'Бабушка Таня',
    name: {
      ru: 'Бабуля, ты придешь?',
      ua: 'Бабуся, ти прийдеш?',
      en: 'Grandma, will you come?'
    }
  },
  {
    id: '5709',
    info: 'Бабушка Люда',
    name: {
      ru: 'Бабуля, ты придешь?',
      ua: 'Бабуся, ти прийдеш?',
      en: 'Grandma, will you come?'
    }
  },
  {
    id: '5710',
    info: 'Дедушка',
    name: {
      ru: 'Дедуля, ты придешь?',
      ua: 'Дідусь, ти прийдеш?',
      en: 'Granddad, will you come?'
    }
  },
  {
    id: '5710',
    info: 'Олег Мордовцев',
    name: {
      ru: 'Папуля, ты придешь?',
      ua: 'Папуля, ти прийдеш?',
      en: 'Dad, will you come?'
    }
  },
  {
    id: '5711',
    info: 'Руслан ',
    name: {
      ru: 'Руслан, ты придешь?',
      ua: 'Руслан, ти прийдеш?',
      en: 'Ruslan, will you come?'
    }
  },


];

export default guests;

const guests = [
  {
    id: 'a93f1d',
    info: 'Дорогой гость',
    name: {
      ru: 'Дорогой гость, ты придешь?',
      ua: 'Шановний гість, ти прийдеш?',
      en: 'Dear guest, will you come?'
    }
  },
  {
    id: 'b72d3e',
    info: 'Оксана Горобченко',
    name: {
      ru: '',
      ua: '',
      en: ''
    }
  },
  {
    id: 'c81f5a',
    info: 'Алексей Белинский',
    name: {
      ru: '',
      ua: '',
      en: ''
    }
  },
  {
    id: 'd92e4b',
    info: 'Inna Mordovtseva',
    name: {
      ru: 'Мамуля, ты придешь?',
      ua: 'Мамуля, ти прийдеш?',
      en: 'Mom, will you come?'
    }
  },
  {
    id: 'e63c2f',
    info: 'Рита Кортун',
    name: {
      ru: 'Рита, ты придешь?',
      ua: 'Ріта, ти прийдеш?',
      en: 'Rita, will you come?'
    }
  },
  {
    id: 'f71a8d',
    info: 'Олег Мордовцев',
    name: {
      ru: 'Папуля, ты придешь?',
      ua: 'Папуля, ти прийдеш?',
      en: 'Dad, will you come?'
    }
  },
  {
    id: 'g82b5e',
    info: 'Дедушка',
    name: {
      ru: 'Дедуля, ты придешь?',
      ua: 'Дідусь, ти прийдеш?',
      en: 'Granddad, will you come?'
    }
  },
  {
    id: 'h93c7f',
    info: 'Бабушка Таня',
    name: {
      ru: 'Бабуля, ты придешь?',
      ua: 'Бабуся, ти прийдеш?',
      en: 'Grandma, will you come?'
    }
  },
  {
    id: 'i24d6a',
    info: 'Бабушка Люда',
    name: {
      ru: 'Бабуля, ты придешь?',
      ua: 'Бабуся, ти прийдеш?',
      en: 'Grandma, will you come?'
    }
  },
  {
    id: 'j35e8c',
    info: 'Руслан',
    name: {
      ru: 'Руслан, ты придешь?',
      ua: 'Руслан, ти прийдеш?',
      en: 'Ruslan, will you come?'
    }
  },
  {
    id: 'k45f9d',
    info: 'Ирина Кортун',
    name: {
      ru: 'Ира, ты придешь?',
      ua: 'Іра, ти прийдеш?',
      en: 'Iryna, will you come?'
    }
  },
  {
    id: 'l56g0e',
    info: 'Катерина Хорсаженко',
    name: {
      ru: 'Катюша, ты придешь?',
      ua: 'Катюша, ти прийдеш?',
      en: 'Kateryna, will you come?'
    }
  },
  {
    id: 'm67h1f',
    info: 'Богдан Мартыненко',
    name: {
      ru: 'Богдан, ты придешь?',
      ua: 'Богдан, ти прийдеш?',
      en: 'Bogdan, will you come?'
    }
  },
  {
    id: 'n78i2g',
    info: 'Дарина Стуканева',
    name: {
      ru: 'Дарина, ты придешь?',
      ua: 'Дарина, ти прийдеш?',
      en: 'Darina, will you come?'
    }
  },
  {
    id: 'o89j3h',
    info: 'Максим Мальцев',
    name: {
      ru: 'Максим, ты придешь?',
      ua: 'Максим, ти прийдеш?',
      en: 'Maxim, will you come?'
    }
  },
  {
    id: 'p90k4i',
    info: 'Диана Мальцева',
    name: {
      ru: 'Диана, ты придешь?',
      ua: 'Диана, ти прийдеш?',
      en: 'Diana, will you come?'
    }
  },
  {
    id: 'q01l5j',
    info: 'Женя Губарев',
    name: {
      ru: 'Женя, ты придешь?',
      ua: 'Женя, ти прийдеш?',
      en: 'Zhenya, will you come?'
    }
  },
  {
    id: 'r02m6k',
    info: 'Давид',
    name: {
      ru: 'Давид, ты придешь?',
      ua: 'Давид, ти прийдеш?',
      en: 'David, will you come?'
    }
  },
  {
    id: 's03n7l',
    info: 'Паша Мордовцев',
    name: {
      ru: 'Паша, ты придешь?',
      ua: 'Паша, ти прийдеш?',
      en: 'Pasha, will you come?'
    }
  },
  {
    id: 't04o8m',
    info: 'Наташа Мордовцева',
    name: {
      ru: 'Наташа, ты придешь?',
      ua: 'Наташа, ти прийдеш?',
      en: 'Natasha, will you come?'
    }
  },
  {
    id: 'u05p9n',
    info: 'Кирилл',
    name: {
      ru: 'Кирилл, ты придешь?',
      ua: 'Кирилл, ти прийдеш?',
      en: 'Kirill, will you come?'
    }
  },
  {
    id: 'v06q0o',
    info: 'Никита',
    name: {
      ru: 'Никита, ты придешь?',
      ua: 'Никита, ти прийдеш?',
      en: 'Nikita, will you come?'
    }
  },
  {
    id: 'w07r1p',
    info: 'Петер',
    name: {
      ru: 'Петер, ты придешь?',
      ua: 'Петер, ти прийдеш?',
      en: 'Peter, will you come?'
    }
  },
  {
    id: 'x08s2q',
    info: 'Роджер',
    name: {
      ru: 'Роджер, ты придешь?',
      ua: 'Роджер, ти прийдеш?',
      en: 'Roger, will you come?'
    }
  }
];

export default guests;

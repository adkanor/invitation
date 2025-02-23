const guests = [
  {
    id: 'a93f1d',
    info: 'Дорогой гость',
    name: {
      ru: 'Дорогой гость, это приглашение для тебя!',
      ua: 'Шановний гість, це запрошення для тебе!',
      en: 'Dear guest, this invitation is for you!'
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
      ru: 'Мамуля, это приглашение для тебя!',
      ua: 'Мамуля, це запрошення для тебе!',
      en: 'Mom, this invitation is for you!'
    }
  },
  {
    id: 'e63c2f',
    info: 'Рита Кортун',
    name: {
      ru: 'Рита, это приглашение для тебя!',
      ua: 'Ріта, це запрошення для тебе!',
      en: 'Rita, this invitation is for you!'
    }
  },
  {
    id: 'f71a8d',
    info: 'Олег Мордовцев',
    name: {
      ru: 'Папуля, это приглашение для тебя!',
      ua: 'Папуля, це запрошення для тебе!',
      en: 'Dad, this invitation is for you!'
    }
  },
  {
    id: 'g82b5e',
    info: 'Дедушка',
    name: {
      ru: 'Дедуля, это приглашение для тебя!',
      ua: 'Дідусь, це запрошення для тебе!',
      en: 'Granddad, this invitation is for you!'
    }
  },
  {
    id: 'h93c7f',
    info: 'Бабушка Таня',
    name: {
      ru: 'Бабуля, это приглашение для тебя!',
      ua: 'Бабуся, це запрошення для тебе!',
      en: 'Grandma, this invitation is for you!'
    }
  },
  {
    id: 'i24d6a',
    info: 'Бабушка Люда',
    name: {
      ru: 'Бабуля, это приглашение для тебя!',
      ua: 'Бабуся, це запрошення для тебе!',
      en: 'Grandma, this invitation is for you!'
    }
  },
  {
    id: 'j35e8c',
    info: 'Руслан',
    name: {
      ru: 'Руслан, это приглашение для тебя!',
      ua: 'Руслан, це запрошення для тебе!',
      en: 'Ruslan, this invitation is for you!'
    }
  },
  {
    id: 'k45f9d',
    info: 'Ирина Кортун',
    name: {
      ru: 'Ира, это приглашение для тебя!',
      ua: 'Іра, це запрошення для тебе!',
      en: 'Iryna, this invitation is for you!'
    }
  },
  {
    id: 'l56g0e',
    info: 'Катерина Хорсаженко',
    name: {
      ru: 'Катюша, это приглашение для тебя!',
      ua: 'Катюша, це запрошення для тебе!',
      en: 'Kateryna, this invitation is for you!'
    }
  },
  {
    id: 'm67h1f',
    info: 'Богдан Мартыненко',
    name: {
      ru: 'Богдан, это приглашение для тебя!',
      ua: 'Богдан, це запрошення для тебе!',
      en: 'Bogdan, this invitation is for you!'
    }
  },
  {
    id: 'n78i2g',
    info: 'Дарина Стуканева',
    name: {
      ru: 'Дарина, это приглашение для тебя!',
      ua: 'Дарина, це запрошення для тебе!',
      en: 'Darina, this invitation is for you!'
    }
  },
  {
    id: 'o89j3h',
    info: 'Максим Мальцев',
    name: {
      ru: 'Максим, это приглашение для тебя!',
      ua: 'Максим, це запрошення для тебе!',
      en: 'Maxim, this invitation is for you!'
    }
  },
  {
    id: 'p90k4i',
    info: 'Диана Мальцева',
    name: {
      ru: 'Диана, это приглашение для тебя!',
      ua: 'Діана, це запрошення для тебе!',
      en: 'Diana, this invitation is for you!'
    }
  },
  {
    id: 'q01l5j',
    info: 'Женя Губарев',
    name: {
      ru: 'Женя, это приглашение для тебя!',
      ua: 'Женя, це запрошення для тебе!',
      en: 'Zhenya, this invitation is for you!'
    }
  },
  {
    id: 'q01l5q23j',
    info: 'Юля Зеленская',
    name: {
      ru: 'Юля, это приглашение для тебя!',
      ua: 'Юля, це запрошення для тебе!',
      en: 'Julia, this invitation is for you!'
    }
  },
  {
    id: 'r02m6k',
    info: 'Давид',
    name: {
      ru: 'Давид, это приглашение для тебя!',
      ua: 'Давид, це запрошення для тебе!',
      en: 'David, this invitation is for you!'
    }
  },
  {
    id: 's03n7l',
    info: 'Паша Мордовцев',
    name: {
      ru: 'Паша, это приглашение для тебя!',
      ua: 'Паша, це запрошення для тебе!',
      en: 'Pasha, this invitation is for you!'
    }
  },
  {
    id: 't04o8m',
    info: 'Наташа Мордовцева',
    name: {
      ru: 'Наташа, это приглашение для тебя!',
      ua: 'Наталія, це запрошення для тебе!',
      en: 'Natasha, this invitation is for you!'
    }
  },
  {
    id: 'u05p9n',
    info: 'Кирилл',
    name: {
      ru: 'Кирилл, это приглашение для тебя!',
      ua: 'Кирилл, це запрошення для тебе!',
      en: 'Kirill, this invitation is for you!'
    }
  },
  {
    id: 'v06q0o',
    info: 'Никита',
    name: {
      ru: 'Никита, это приглашение для тебя!',
      ua: 'Микита, це запрошення для тебе!',
      en: 'Nikita, this invitation is for you!'
    }
  },
  {
    id: 'w07r1p',
    info: 'Петер',
    name: {
      ru: 'Петер, это приглашение для тебя!',
      ua: 'Петер, це запрошення для тебе!',
      en: 'Peter, this invitation is for you!'
    }
  },
  {
    id: 'x08s2q',
    info: 'Роджер',
    name: {
      ru: 'Роджер, это приглашение для тебя!',
      ua: 'Роджер, це запрошення для тебе!',
      en: 'Roger, this invitation is for you!'
    }
  }
];

export default guests;

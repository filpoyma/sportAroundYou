const personId = 1334;
const dates = [
  '2019-10-06T12:00:00.000',
  '2019-10-06T11:00:00.000',
  '2019-10-06T10:00:00.000',
  '2019-10-05T11:00:00.000',
  '2019-10-05T10:00:00.000',
  '2019-10-04T10:00:00.000'
];
const rir = (min = 0, max = 5) => Math.round((max - min) * Math.random()) + min;
const randomRawData = (amount, min, max) => {
  const data = [];

  for (let i = 0; i < amount; i += 1) {
    data.push(rir(min, max));
  }

  return data;
};

const MOCKED_ATHLETE = {
  id: 1,
  person: {
    id: personId,
    oldId: null,
    name: 'Денис Белокопытов',
    firstName: null,
    lastName: null,
    bdDate: '1985-10-27',
    userRegDate: null,
    gender: 'M',
    age: 33,
    addr: null,
    resdate: null,
    email: null,
    phone: null,
    height: 173,
    weight: 82.3
  },
  sport: { id: 43, name: 'Велоспорт' },
  organization: {
    id: 44,
    name: 'Команда Пираты',
    email: 'chemps@ya.ru',
    address: 'Address in Moscow',
    comment: 'Какое нибудь описание',
    phone: '890326324444',
    sportId: null,
    type: 'TEAM'
  }
};

const MOCKED_DATES = dates.map((datetimes, index) => ({
  id: dates.length - (index + 1),
  personId,
  datetimes
}));

const MOCKED_CALIPEROMETRY = dates.map((createdDate, index) => ({
  id: index,
  personId,
  belly: rir(0, 10),
  bfm: rir(0, 10),
  biceps: rir(0, 10),
  bmi: rir(0, 10),
  chest: rir(0, 10),
  d: rir(0, 100),
  ffm: Math.random(),
  forearm: rir(0, 10),
  gender: 'M',
  height: rir(120, 180),
  hipMid: rir(0, 10),
  hipUp: rir(0, 10),
  iliac: rir(0, 10),
  pbfm: rir(0, 20),
  pffm: Math.random(),
  shin: rir(0, 10),
  triceps: rir(0, 10),
  underShoulderBlade: rir(0, 10),
  weight: rir(30, 80),
  wrist: rir(0, 10),
  createdDate
}));

const MOCKED_SPORT_MOTIVATION_SCALE = dates.map((createdDate, index) => ({
  id: index,
  personId,
  un: rir(1, 24),
  s: rir(1, 24),
  pe: rir(1, 24),
  sc: rir(1, 24),
  d: rir(1, 24),
  so: rir(1, 24),
  om: rir(1, 24),
  internalMotivation: rir(1, 60),
  externalMotivation: rir(1, 60),
  prcDiff: 1,
  rawData: randomRawData(28, 1, 7),
  createdDate
}));

const MOCKED_ENDPOINTS = [
  {
    endpoint: /\/athletes\/\d+?/,
    data: MOCKED_ATHLETE
  },
  {
    endpoint: /\/.*\/dates\?personId=\d+?/,
    data: MOCKED_DATES
  },
  {
    endpoint: /\/sms\/\?personId=\d+?/,
    data: MOCKED_SPORT_MOTIVATION_SCALE
  },
  {
    endpoint: /\/caliperometry\/\?personId=\d+?/,
    data: MOCKED_CALIPEROMETRY
  }
];

export default MOCKED_ENDPOINTS;

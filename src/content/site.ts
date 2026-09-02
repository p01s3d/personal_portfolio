export const site = {
  directory: {
    rooms: [
      {
        no: '01',
        name: 'Studio',
        desc: 'Workoholics — work, services, agency, culture.',
        to: '/studio',
      },
      {
        no: '02',
        name: 'Craft',
        desc: 'wild — craft, engineered. A point of view from Vienna.',
        to: '/craft',
      },
      {
        no: '03',
        name: '1sap',
        desc: 'Gregory Muryn-Mukha — founding product designer.',
        to: '/1sap',
      },
      {
        no: '04',
        name: 'os1',
        desc: 'gucduck — a macOS desktop, rebuilt as a portfolio.',
        to: '/os1',
      },
      {
        no: '05',
        name: 'obs',
        desc: 'Obys Agency — concept-driven studio, three ways to browse the work.',
        to: '/obs',
      },
      {
        no: '06',
        name: 'mix1',
        desc: 'Osandi — the live portfolio, at the site root.',
        to: '/',
      },
      {
        no: '07',
        name: 'andk',
        desc: 'Andrejs Korovskis — digital designer, Riga. Served as a static 1:1 replica.',
        to: '/andk/',
        // Static page under public/, not a React route — the directory must
        // render a plain <a> so the browser does a real document load.
        static: true,
      },
    ],
  },
} as const;

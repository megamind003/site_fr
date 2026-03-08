import type { Messages } from 'next-intl';

export default {
  Meta: {
    title: 'Da Massy In Rosticceria | Pizzeria e Tavola Calda a Cerveteri',
    description: 'Pizzeria e tavola calda dal 1986. Menu variabile ogni giorno, pizza sempre disponibile. Vieni a trovarci in Via Prato del Cavaliere 7, Cerveteri RM.',
  },
  Nav: {
    home: 'Home',
    menu: 'Menu',
    about: 'Chi Siamo',
    events: 'Eventi',
    contact: 'Contatti',
    reserve: 'Prenota',
  },
  Hero: {
    subtitle: 'Pizzeria & Tavola Calda',
    title: 'Da Massy In Rosticceria',
    description: 'Ogni giorno il menu cambia. Pizza sempre disponibile, tavola calda a pranzo.',
    ctaPrimary: 'Scopri il Menu di Oggi',
    ctaSecondary: 'Prenota un Tavolo',
  },
  MenuNotice: {
    title: 'Menu Variabile Ogni Giorno',
    description: 'Le nostre proposte cambiano quotidianamente in base alla freschezza degli ingredienti.',
    disclaimer: 'I piatti mostrati sono esempi delle nostre categorie. Chiedi in negozio per il menu del giorno.',
  },
  PranzoCena: {
    title: 'Pranzo e Cena',
    pranzoTitle: 'Pranzo (12:00 - 14:00)',
    pranzoDescription: 'Tavola calda completa con bancone pizza, contorni, primi e secondi.',
    cenaTitle: 'Cena',
    cenaDescription: 'Focus sulla pizza. Il bancone completo non è disponibile la sera.',
    alwaysAvailable: 'Bancone pizza attivo tutto il giorno',
  },
  WeeklySpecials: {
    title: 'Ricorrenze Settimanali',
    subtitle: 'Appuntamenti fissi ogni settimana',
    thursday: {
      title: 'Giovedì Gnocchi',
      description: 'Ogni giovedì gnocchi fatti in casa',
    },
    friday: {
      title: 'Venerdì Pesce',
      description: 'Ogni venerdì proposte di mare fresche',
    },
    daily: {
      title: 'Dolce del Giorno',
      description: 'Ogni giorno un dolce diverso fatto in casa',
    },
  },
  Beverages: {
    title: 'Bevande',
    subtitle: 'Vino, birra e analcolici',
    wineDraft: 'Vino sfuso alla spina',
    beerDraft: 'Birra alla spina',
    bottled: 'Bottiglie e lattine in frigo',
    description: 'Ampia selezione di vini sfusi e birre disponibili al calice o alla spina.',
  },
  Prices: {
    disclaimer: 'Prezzi soggetti a variazione. Chiedi in negozio per il listino aggiornato.',
    primiFrom: 'Primi a partire da €6',
    byWeight: 'Molte proposte disponibili al peso',
  },
  Identity: {
    tagline: 'Pizzeria e Tavola Calda dal 1986',
    description: 'Da Massy In Rosticceria: pizza sempre disponibile, tavola calda a pranzo con bancone completo di contorni, primi e secondi.',
    highlights: [
      'Pizza al taglio sempre disponibile',
      'Bancone contorni molto apprezzato',
      'Menu variabile ogni giorno',
    ],
  },
  Menu: {
    title: 'Il Nostro Menu',
    subtitle: 'Scopri le nostre proposte',
    sectionTitle: 'Le Nostre Proposte',
    sectionSubtitle: 'Categorie del nostro menu',
    cta: 'Scopri di Più',
    categories: ['Antipasti', 'Primi', 'Secondi', 'Pizza', 'Dolci'],
    dishes: {
      terra: {
        name: 'Piatti di Terra',
        description: 'Carni e verdure di stagione',
      },
      mare: {
        name: 'Piatti di Mare',
        description: 'Pesce fresco del giorno',
      },
      pizza: {
        name: 'Pizza al Taglio',
        description: 'Sempre disponibile',
      },
      carbonara: {
        name: 'Carbonara',
        description: 'La classica romana',
      },
      spaghetti: {
        name: 'Spaghetti al Pomodoro',
        description: 'Semplici e genuini',
      },
      tiramisu: {
        name: 'Tiramisù',
        description: 'Fatto in casa',
      },
    },
  },
  Features: {
    sectionTitle: 'Perché Sceglierci',
    sectionSubtitle: 'La nostra filosofia',
    items: [
      {
        icon: 'utensils',
        title: 'Cucina Quotidiana',
        description: 'Ogni giorno il menu cambia per offrirti sempre qualcosa di fresco e nuovo.',
      },
      {
        icon: 'leaf',
        title: 'Ingredienti Freschi',
        description: 'Selezioniamo ogni mattina gli ingredienti migliori dal mercato.',
      },
      {
        icon: 'heart',
        title: 'Passione dal 1986',
        description: 'Quasi 40 anni di esperienza nella ristorazione di qualità.',
      },
      {
        icon: 'wine',
        title: 'Vini Sfusi',
        description: 'Ampia selezione di vini alla spina e bottiglie pregiate.',
      },
    ],
  },
  About: {
    sectionTitle: 'La Nostra Storia',
    sectionSubtitle: 'Quasi 40 anni di tradizione',
    title: 'La Nostra Tradizione',
    description: 'Da Massy In Rosticceria è un punto di riferimento a Cerveteri per chi cerca una pizzeria di qualità e una tavola calda dove pranzare velocemente senza rinunciare al gusto.',
    features: {
      tradition: {
        title: 'Tradizione',
        description: 'Dal 1986 serviamo la comunità di Cerveteri con passione e dedizione.',
      },
      sea: {
        title: 'Pesce Fresco',
        description: 'Selezione quotidiana di pesce fresco per le nostre proposte di mare.',
      },
      territory: {
        title: 'Territorio',
        description: 'Ingredienti locali e ricette della tradizione laziale.',
      },
    },
    stats: {
      years: '38',
      yearsLabel: 'Anni di Attività',
      dishes: '50+',
      dishesLabel: 'Piatti al Giorno',
      customers: '10000+',
      customersLabel: 'Clienti Felici',
    },
  },
  Reservation: {
    sectionTitle: 'Prenota un Tavolo',
    sectionSubtitle: 'Ti aspettiamo',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefono',
    guests: 'Numero di Ospiti',
    date: 'Data',
    time: 'Orario',
    notes: 'Note Speciali',
    submit: 'Richiedi Prenotazione',
    success: 'Richiesta inviata! Ti contatteremo per confermare.',
    error: 'Si è verificato un errore. Riprova più tardi.',
  },
  Footer: {
    tagline: 'Pizzeria e Tavola Calda dal 1986',
    addressTitle: 'Indirizzo',
    addressValue: 'Via Prato del Cavaliere 7, 00052 Cerveteri RM',
    contactTitle: 'Contatti',
    phoneTitle: 'Telefono',
    phoneValue: '+39 06 995 3303',
    emailTitle: 'Email',
    emailValue: 'info@damassy.it',
    hoursTitle: 'Orari Attuali',
    hoursValue: 'Lun-Ven: 8:30 - 15:30 | Ven-Sab: 8:30 - 21:30',
    hoursDisclaimer: 'Orari provvisori - soggetti a variazione. Contattaci per conferma.',
    followUs: 'Seguici',
    copyright: '© 2026 Da Massy In Rosticceria. Tutti i diritti riservati.',
  },
  Contact: {
    title: 'Contatti',
    subtitle: 'Siamo qui per te',
    phone: {
      label: 'Telefono',
      value: '+39 06 995 3303',
    },
    email: {
      label: 'Email',
      value: 'info@damassy.it',
    },
    address: {
      title: 'Indirizzo',
      street: 'Via Prato del Cavaliere 7',
      cap: '00052',
      city: 'Cerveteri',
      province: 'RM',
    },
    hours: {
      title: 'Orari',
      value: 'Lun-Ven: 8:30 - 15:30',
      disclaimer: 'Orari provvisori - soggetti a variazione',
    },
  },
  Events: {
    hero: {
      title: 'Eventi e Celebrazioni',
      subtitle: 'Rendi speciali i tuoi momenti',
      description: 'Organizziamo compleanni, matrimoni e eventi aziendali con menu personalizzati.',
      cta: 'Richiedi Informazioni',
    },
    navCta: 'Eventi',
    featuresTitle: 'I Nostri Servizi',
    featuresSubtitle: 'Per il tuo evento speciale',
    capacity: {
      title: 'Capienza',
      description: 'Spazi accoglienti per ogni occasione',
      label: 'Capienza massima',
      imagePlaceholder: 'Foto evento',
    },
    types: {
      birthday: {
        title: 'Compleanni',
        description: 'Festa il tuo giorno speciale con amici e famiglia.',
        capacity: 'Fino a 50 persone',
      },
      wedding: {
        title: 'Matrimoni',
        description: 'Ricevimenti intimi e cene di prova.',
        capacity: 'Fino a 80 persone',
      },
      business: {
        title: 'Eventi Aziendali',
        description: 'Pranzi di lavoro e cene di gala.',
        capacity: 'Fino a 60 persone',
      },
      special: {
        title: 'Occasioni Speciali',
        description: 'Anniversari, lauree e molto altro.',
        capacity: 'Su misura per te',
      },
    },
    cta: {
      title: 'Parla con Noi',
      description: 'Contattaci per discutere del tuo evento.',
      button: 'Richiedi Informazioni',
    },
    galleryTitle: 'Galleria Eventi',
  },
  Common: {
    loading: 'Caricamento...',
    error: 'Si è verificato un errore',
    retry: 'Riprova',
    learnMore: 'Scopri di più',
  },
} satisfies Messages;

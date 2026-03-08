import type { Messages } from 'next-intl';

export default {
  Meta: {
    title: 'Da Massy In Rosticceria | Pizzeria and Tavola Calda in Cerveteri',
    description: 'Pizzeria and hot table since 1986. Daily changing menu, pizza always available. Visit us at Via Prato del Cavaliere 7, Cerveteri RM.',
  },
  Nav: {
    home: 'Home',
    menu: 'Menu',
    about: 'About Us',
    events: 'Events',
    contact: 'Contact',
    reserve: 'Book',
  },
  Hero: {
    subtitle: 'Pizzeria & Tavola Calda',
    title: 'Da Massy In Rosticceria',
    description: 'The menu changes every day. Pizza always available, hot table at lunch.',
    ctaPrimary: "Discover Today's Menu",
    ctaSecondary: 'Book a Table',
  },
  MenuNotice: {
    title: 'Daily Changing Menu',
    description: 'Our offerings change daily based on ingredient freshness.',
    disclaimer: 'Dishes shown are examples of our categories. Ask in store for today menu.',
  },
  PranzoCena: {
    title: 'Lunch and Dinner',
    pranzoTitle: 'Lunch (12:00 - 14:00)',
    pranzoDescription: 'Complete hot table with pizza counter, side dishes, first and second courses.',
    cenaTitle: 'Dinner',
    cenaDescription: 'Focus on pizza. Full counter not available in the evening.',
    alwaysAvailable: 'Pizza counter active all day',
  },
  WeeklySpecials: {
    title: 'Weekly Specials',
    subtitle: 'Fixed appointments every week',
    thursday: {
      title: 'Thursday Gnocchi',
      description: 'Homemade gnocchi every Thursday',
    },
    friday: {
      title: 'Friday Fish',
      description: 'Fresh seafood offerings every Friday',
    },
    daily: {
      title: 'Dessert of the Day',
      description: 'A different homemade dessert every day',
    },
  },
  Beverages: {
    title: 'Beverages',
    subtitle: 'Wine, beer and soft drinks',
    wineDraft: 'Draft wine',
    beerDraft: 'Draft beer',
    bottled: 'Bottles and cans in fridge',
    description: 'Wide selection of draft wines and beers available by the glass or on tap.',
  },
  Prices: {
    disclaimer: 'Prices subject to change. Ask in store for updated price list.',
    primiFrom: 'First courses from €6',
    byWeight: 'Many offerings available by weight',
  },
  Identity: {
    tagline: 'Pizzeria and Tavola Calda since 1986',
    description: 'Da Massy In Rosticceria: pizza always available, hot table at lunch with complete counter of side dishes, first and second courses.',
    highlights: [
      'Sliced pizza always available',
      'Highly appreciated side dish counter',
      'Daily changing menu',
    ],
  },
  Menu: {
    title: 'Our Menu',
    subtitle: 'Discover our offerings',
    sectionTitle: 'Our Offerings',
    sectionSubtitle: 'Menu categories',
    cta: 'Learn More',
    categories: ['Appetizers', 'First Courses', 'Second Courses', 'Pizza', 'Desserts'],
    dishes: {
      terra: {
        name: 'Land Dishes',
        description: 'Meat and seasonal vegetables',
      },
      mare: {
        name: 'Sea Dishes',
        description: 'Fresh fish of the day',
      },
      pizza: {
        name: 'Sicilian Pizza',
        description: 'Always available',
      },
      carbonara: {
        name: 'Carbonara',
        description: 'The classic Roman dish',
      },
      spaghetti: {
        name: 'Spaghetti with Tomato Sauce',
        description: 'Simple and genuine',
      },
      tiramisu: {
        name: 'Tiramisu',
        description: 'Homemade',
      },
    },
  },
  Features: {
    sectionTitle: 'Why Choose Us',
    sectionSubtitle: 'Our philosophy',
    items: [
      {
        icon: 'utensils',
        title: 'Daily Kitchen',
        description: 'The menu changes every day to always offer you something fresh and new.',
      },
      {
        icon: 'leaf',
        title: 'Fresh Ingredients',
        description: 'We select the best ingredients from the market every morning.',
      },
      {
        icon: 'heart',
        title: 'Passion since 1986',
        description: 'Almost 40 years of experience in quality dining.',
      },
      {
        icon: 'wine',
        title: 'Draft Wines',
        description: 'Wide selection of draft wines and premium bottles.',
      },
    ],
  },
  About: {
    sectionTitle: 'Our Story',
    sectionSubtitle: 'Almost 40 years of tradition',
    description: "Da Massy In Rosticceria is a reference point in Cerveteri for those seeking a quality pizzeria and a hot table where to have a quick lunch without sacrificing taste.",
    features: [
      'Pizza counter always active',
      'Hot table at lunch with various side dishes',
      'Menu that changes every day',
      'Draft wines and beers on tap',
    ],
    stats: {
      years: '38',
      yearsLabel: 'Years of Activity',
      dishes: '50+',
      dishesLabel: 'Dishes Daily',
      customers: '10000+',
      customersLabel: 'Happy Customers',
    },
  },
  Reservation: {
    sectionTitle: 'Book a Table',
    sectionSubtitle: 'We are waiting for you',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    guests: 'Number of Guests',
    date: 'Date',
    time: 'Time',
    notes: 'Special Requests',
    submit: 'Request Reservation',
    success: 'Request sent! We will contact you to confirm.',
    error: 'An error occurred. Please try again later.',
  },
  Footer: {
    tagline: 'Pizzeria and Tavola Calda since 1986',
    addressTitle: 'Address',
    addressValue: 'Via Prato del Cavaliere 7, 00052 Cerveteri RM',
    contactTitle: 'Contacts',
    phoneTitle: 'Phone',
    phoneValue: '+39 06 995 3303',
    emailTitle: 'Email',
    emailValue: 'info@damassy.it',
    hoursTitle: 'Current Hours',
    hoursValue: 'Mon-Fri: 8:30 - 15:30 | Fri-Sat: 8:30 - 21:30',
    hoursDisclaimer: 'Provisional hours - subject to change. Contact us for confirmation.',
    followUs: 'Follow Us',
    copyright: '© 2026 Da Massy In Rosticceria. All rights reserved.',
  },
  Contact: {
    title: 'Contact Us',
    subtitle: 'We are here for you',
    phone: {
      label: 'Phone',
      value: '+39 06 995 3303',
    },
    email: {
      label: 'Email',
      value: 'info@damassy.it',
    },
    address: {
      title: 'Address',
      street: 'Via Prato del Cavaliere 7',
      cap: '00052',
      city: 'Cerveteri',
      province: 'RM',
    },
    hours: {
      title: 'Hours',
      value: 'Mon-Fri: 8:30 - 15:30',
      disclaimer: 'Provisional hours - subject to change',
    },
  },
  Events: {
    hero: {
      title: 'Events and Celebrations',
      subtitle: 'Make your moments special',
      description: 'We organize birthdays, weddings and corporate events with customized menus.',
    },
    features: [
      {
        title: 'Birthdays',
        description: 'Celebrate your special day with friends and family.',
        capacity: 'Up to 50 people',
      },
      {
        title: 'Weddings',
        description: 'Intimate receptions and trial dinners.',
        capacity: 'Up to 80 people',
      },
      {
        title: 'Corporate Events',
        description: 'Business lunches and gala dinners.',
        capacity: 'Up to 60 people',
      },
      {
        title: 'Special Occasions',
        description: 'Anniversaries, graduations and much more.',
        capacity: 'Tailored for you',
      },
    ],
    cta: {
      title: 'Talk to Us',
      description: 'Contact us to discuss your event.',
      button: 'Request Information',
    },
  },
  Common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    learnMore: 'Learn more',
  },
} satisfies Messages;

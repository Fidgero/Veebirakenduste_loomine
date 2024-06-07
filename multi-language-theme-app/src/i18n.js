import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Multi-Language Theme App",
      "welcome": "Welcome",
      "data": "Data",
      "footer": "© 2023 Multi-Language Theme App",
      "language": "Language",
      "theme": "Theme"
    }
  },
  et: {
    translation: {
      "title": "Mitmekeelne Teema Rakendus",
      "welcome": "Tere tulemast",
      "data": "Andmed",
      "footer": "© 2023 Mitmekeelne Teema Rakendus",
      "language": "Keel",
      "theme": "Teema"
    }
  },
  ru: {
    translation: {
      "title": "Многоязычное Тематическое Приложение",
      "welcome": "Добро пожаловать",
      "data": "Данные",
      "footer": "© 2023 Многоязычное Тематическое Приложение",
      "language": "Язык",
      "theme": "Тема"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

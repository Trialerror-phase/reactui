import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require('./i18n/en.json') },
      sw: { translation: require('./i18n/sw.json') },
      fr: { translation: require('./i18n/fr.json') },
      nl: { translation: require('./i18n/nl.json') },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;

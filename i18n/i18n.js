import I18n from 'react-native-i18n';
import en from './locales/en';
import fr from './locales/fr';
I18n.translations = {
  en,
  fr
};
I18n.fallbacks = false;
/** Testing French */
/*
I18n.defaultLocale = "fr";
I18n.locale = "fr";
*/
export default I18n;

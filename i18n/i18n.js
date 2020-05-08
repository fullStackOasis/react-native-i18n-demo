import I18n from 'react-native-i18n';
import en from './locales/en';
import en_US from './locales/en-US';
import fr from './locales/fr';
import nl from './locales/nl';
I18n.translations = {
  en : en,
  'en-US' : en_US,
  fr : fr,
  nl : nl
};
I18n.fallbacks = false;
/** Testing French */
/*
I18n.defaultLocale = "fr";
I18n.locale = "fr";
*/
export default I18n;

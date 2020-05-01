import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

export const DEFAULT_LANGUAGE = "fr";

const resources = {
    fr: {
        translation: require('./fr.json')
    },
    en: {
        translation: require('./en.json')
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: DEFAULT_LANGUAGE,
        debug: process.env.NODE_ENV === 'development',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true,
        },
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0
        }
    });

export default i18n;

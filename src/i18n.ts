import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "./localization/En.json";
import dataAr from "./localization/Ar.json";
const resources = {
    en: {
        translation: dataEn,
    },
    ar: {
        translation: dataAr,
    },
};
i18n.use(initReactI18next).init({
    resources,
    lng: "en", // If you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
});

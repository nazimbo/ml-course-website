import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || navigator.language.split("-")[0]);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  return [language, setLanguage];
};

export default useLanguage;

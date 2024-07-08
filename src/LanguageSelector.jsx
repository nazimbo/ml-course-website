import React from "react";
import useLanguage from "./useLanguage";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  // Add more languages here as needed
];

const LanguageSelector = () => {
  const [language, setLanguage] = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 rounded border">
      {languages.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;

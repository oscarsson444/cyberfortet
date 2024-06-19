import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="text-white">
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className="bg-black/40 text-white"
      >
        <option value="en">English</option>
        <option value="sv">Svenska</option>
      </select>
    </div>
  );
}

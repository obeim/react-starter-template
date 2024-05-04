//import { useContext } from "react";
//import { LanguageContext } from "../context/language.context";

import { useTranslation } from "react-i18next";

function Error(props: { msg?: string | null | undefined }) {
  const { t } = useTranslation();
  return (
    <span role="alert" className="text-xs dark:text-red-500 text-red-700">
      {t(props.msg ?? "")}
    </span>
  );
}
export { Error };

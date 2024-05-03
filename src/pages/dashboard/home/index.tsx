import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="px-10 py-4 h-[130vh]">
      <Button
        variant="primary"
        onClick={() => {
          if (i18n.language === "ar") i18n.changeLanguage("en");
          else i18n.changeLanguage("ar");
        }}
      >
        {t("change language")}
      </Button>

      <div className="mt-8 text-3xl">{t("hello")}</div>
    </div>
  );
};

export default Home;

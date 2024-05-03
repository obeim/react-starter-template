import { useEffect } from "react";

const BrowserNavigate = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.replace(url);
  }, []);
  return null;
};

export default BrowserNavigate;

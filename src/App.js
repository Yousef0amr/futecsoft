import AppRoutes from "./router/AppRoutes";
import { useTheme } from "./context/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { darkMode, toggleDarkMode } = useTheme()
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('direction') === 'rtl' ? 'ar' : i18n.language);
  }, [i18n]);
  return (
    <div className={` ${darkMode ? ' dark-mode' : ''}`}>
      <AppRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;

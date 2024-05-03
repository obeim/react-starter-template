import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { AuthProvider } from "./auth/AuthContext";
import { Provider } from "react-redux";
import store from "./store";
import theme from "./theme";
import { RoutesProvider } from "./@core/router";
import useLocalizeDocumentAttributes from "./@core/i18n/useLocalizeDocumentAttributes";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <Provider store={store}>
      <AuthProvider>
        <MantineProvider theme={theme}>
          <RoutesProvider />
        </MantineProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;

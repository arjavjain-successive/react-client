
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import Dashboard from './route/Routes';
const App = () => {
  return (
    <div>
    <AppProvider i18n={enTranslations}>
      <Dashboard/>
  </AppProvider>
  </div>
  );
}

export default App;

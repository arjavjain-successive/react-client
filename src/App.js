
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import React from 'react';
import TextFieldDemo from './pages';


const App = () => {
  
  return (
    <React.Fragment>
      <AppProvider i18n={enTranslations}>
      <TextFieldDemo />
    </AppProvider>
    </React.Fragment>
  );
}

export default App;

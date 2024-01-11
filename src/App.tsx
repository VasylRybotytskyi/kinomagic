// App.tsx

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";

import React, { ReactNode } from "react";

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <Router basename="/kinomagic">
      <Layout>{children}</Layout>
    </Router>
  );
};

export default App;

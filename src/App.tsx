import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Router basename="/kinomagic/">
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

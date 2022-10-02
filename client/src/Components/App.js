import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Works from './Works';
import Extras from './Extras';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/works" element={<Works />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetail'
import Nav from './components/Nav'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from './components/GlobalStyle'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* onExitComplete permet de scroll automatiquement (après animation terminée notamment), ça nous évite de poser le ScrollTop component */}
      <AnimatePresence exitBeforeEnter onExitComplete={() => { window.scrollTo(0, 0) }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

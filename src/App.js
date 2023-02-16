import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/Landing Page/LandingPage";
import Navigation from "./Component/Navigation/Navigation";
import { Route, Routes} from "react-router-dom";
import About from "./Pages/About/About";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import Footer from './Component/Footer/Footer'

function App() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="whatWeDo" element={<WhatWeDo />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import GetStarted from "./components/GetStarted";
import Register from "./components/Register";
import WhatGPT from "./components/WhatGPT";
import WhyGPT from "./components/WhyGPT";
import Blog from "./components/Blog";
import Header from "./components/header/Header";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-totalBg">
      <Header />
      <Sponsors />
      <WhatGPT />
      <WhyGPT />
      <GetStarted />
      <Register />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSect";
import PricingCards from "./components/pricing";
import ClientDetails from "./components/clientDetails";
import AppDetails from "./components/appDetails";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <AppDetails />
      < PricingCards />
      <ClientDetails />
      <ContactUs />
      <Footer />
      </div>
  );
}

export default App;

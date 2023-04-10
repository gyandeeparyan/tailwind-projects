import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;

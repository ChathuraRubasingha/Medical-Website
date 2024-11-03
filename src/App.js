import "./App.css";
import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import Blogs from "./components/Blogs";
import Consultation from "./components/Consultation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <HeaderBar />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Consultation />
      <Solutions />
      <Appointment />
      <Blogs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

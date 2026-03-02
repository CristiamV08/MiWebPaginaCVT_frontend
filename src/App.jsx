import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
// import Pricing from './components/Pricing';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      {/* <Pricing /> */}
      <DemoForm />
      <Footer />
    </div>
  );
}

export default App;


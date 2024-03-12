import './App.scss'
import Contact from './views/contact/Contact';
import About from './views/about/About';
import Footer from './views/footer/Footer';
import Home from './views/home/Home';
import Products from './views/products/Products';
import Service from './views/servicio/Service';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Products/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

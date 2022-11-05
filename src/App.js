import './App.css';
import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ComingSoon />
      <About />
      <Footer />
    </div>
  );
}

export default App;

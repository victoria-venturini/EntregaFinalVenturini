import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import MiCustomProvider from './components/miContexto';
import "./db/migration"
import { CartProvider } from './components/CartContext';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <Header />
        <Main />
        <Footer />
    </CartProvider>
      {/* //<MiCustomProvider> */}
        
     {/* // </MiCustomProvider> */}
    </BrowserRouter>
  );
}

export default App;

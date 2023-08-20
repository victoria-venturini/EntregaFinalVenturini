import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
     <Header/>
     <ItemListContainer greeting="Bienvenidos a Kira Indumentaria" />
     <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/carrito/:carritoId" element={<CartWidget/>}/>
     </Routes>
     <Main/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;

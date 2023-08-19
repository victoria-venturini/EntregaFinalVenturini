import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <ItemListContainer greeting="Bienvenidos a Kira Indumentaria" />
     <ItemCount/>
     <ItemDetailContainer/>
     <Main/>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;

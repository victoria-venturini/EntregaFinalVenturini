import Footer from './components/Footer';
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';

function App() {
  return (
    <>
     <Header/>
     <ItemListContainer greeting="Bienvenidos a Kira Indumentaria" />
     <Main/>
     <Footer/>
    </>
  );
}

export default App;

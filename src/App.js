import './App.css';
import './components/Header';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/*  */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;

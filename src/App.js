import './App.css';
import './components/Header';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div id="App-header">
        <Header></Header>
      </div>
      <div id="App-body">
        <Body></Body>
      </div>
      <div id="App-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

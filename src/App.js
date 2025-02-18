import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Coin from './pages/coin/coin';
function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin:coin id' element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;

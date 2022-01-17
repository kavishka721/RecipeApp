import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './components/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

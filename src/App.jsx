import './App.scss';
import Login from './pages/Login';
import Ragister from './pages/Ragister';
import Listnews from './pages/Listnews';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (   <Router>
                <div className='App'>
                <Routes>
                  <Route index element={< Ragister />}></Route>
                  <Route path='/Login' element={<Login/>}></Route>
                  <Route path='/Ragister' element={<Ragister/>}></Route>
                  <Route path='/Listnews' element={<Listnews />}></Route>
                  
                </Routes>
                </div>
    
  </Router>
   
  );
}

export default App;

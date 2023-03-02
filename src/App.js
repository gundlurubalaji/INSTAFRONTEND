import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Rapper from './components/Rapper';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreatePost from './components/Createpost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Loading/>}/>
        <Route path='/posts'element={<Rapper/>}/>
        <Route path='/createpost'element={<CreatePost/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

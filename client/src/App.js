import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Body from './components/home/Body';


function App() {

  return (
    <Router>
      <div className='h-full w-full absolute lg:overflow-hidden'>
        <Header/>
        <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/pronunciation' element={<Body/>}/>
        <Route path='/index' element={<Body/>}/>
        <Route path='/topic' element={<Body/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

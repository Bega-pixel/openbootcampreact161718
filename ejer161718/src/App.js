import './App.css';
import { Route, Routes } from 'react-router-dom';

import Forms from '../src/components/Forms/Forms';
import Home from '../src/components/Home/Home.jsx';
import About from '../src/components/About/About.jsx';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import NotFoundPage from '../src/components/NotFound/NotFoundPage.jsx';

import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/'  element= {<Home/>} exact />
        <Route path='/About'  element= {<About />} exact />

        <Route  element= {<PrivateRoutes />}>

          <Route path='/Forms'  element= {<Forms />} exact />
          
        </Route>
      
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    
    </>
  );
}

export default App;



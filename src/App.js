import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Authentication/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Register from './Components/Authentication/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import News from './Components/News/News';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/home' element={<Home />}>
          <Route path='/home/news' element={
            <RequireAuth>
              <News />
            </RequireAuth>
          }></Route>
        </Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Authentication/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Register from './Components/Authentication/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import Register from './pages/register/register.jsx';
import DashBoardAdmin from './pages/dashboardAdmin/dashBoardAdmin.jsx';
import Profile from './pages/profile/Profile.jsx';
import ChangePassowrd from './pages/profile/changepassword/ChangePassword.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/hotels' element={<List />}/>
          <Route path='/hotels/:id' element={<Hotel />}/>
          <Route path='/login' element={<Login />}/>
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/profile' element={<Profile />}/>
          <Route exact path='/changepassword' element={<ChangePassowrd />}/>
          <Route exact path='/dashBoardAdmin' element={<DashBoardAdmin />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

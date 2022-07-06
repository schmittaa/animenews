import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ListAnime from './pages/Lists/ListAnime';
import ListUsers from './pages/Lists/ListUsers';
import ListNews from './pages/Lists/ListNews';
import ManageAnime from './pages/Management/ManageAnime'
import ManageUser from './pages/Management/ManageUser'
import ManageNews from './pages/Management/ManageNews'
import Login from './pages/Login';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/animes" element={<ListAnime/>} />
        <Route path="/users" element={<ListUsers/>} />
        <Route path="/news" element={<ListNews/>} />
        <Route path="/manageUser" element={<ManageUser/>} />
        <Route path="/manageAnime" element={<ManageAnime/>} />
        <Route path="/manageNews" element={<ManageNews/>} />
      </Routes>
    </div>
  );
}

export default App;

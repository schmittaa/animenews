import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/profile/Profile';
import ListAnime from './pages/Lists/ListAnime';
import ListUsers from './pages/Lists/ListUsers';
import ListNews from './pages/Lists/ListNews';
import ManageAnime from './pages/Management/ManageAnime'
import ManageNews from './pages/Management/ManageNews'
import Login from './pages/Login';
import PrivateRoute from './router/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from './redux/actions/authActions';
import Dashboard from './pages/profile/Dashboard';
import ListComment from './pages/Lists/ListComment';
import CardDetails from './pages/Cards/CardDetails';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(currentUser())
    }
  }, [dispatch])
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/news" element={<ListNews />} />
        <Route path="/animes" element={<ListAnime />} />

        <Route path="/comments" element={
          <PrivateRoute>
            <ListComment />
          </PrivateRoute>

        } />


        <Route path="/detail" element={
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>

        } />

        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/users" element={
          <PrivateRoute>
            <ListUsers />
          </PrivateRoute>} />
        <Route path="/ManageAnime" element={
          <PrivateRoute>
            <ManageAnime />
          </PrivateRoute>} />
        <Route path="/ManageNews" element={
          <PrivateRoute>
            <ManageNews />
          </PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

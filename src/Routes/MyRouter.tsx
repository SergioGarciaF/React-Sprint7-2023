import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Starships from '../components/Starships';
import StarshipsDetails from '../components/StarshipsDetails';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Register from '../components/Register';
import ProtectedRoute from '../components/utils/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../store/slices';

const MyRouter = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/starships/:name" element={<StarshipsDetails />} />
        <Route
          path="/starships"
          element={
            <ProtectedRoute registered={user}>
              <Starships />
            </ProtectedRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;

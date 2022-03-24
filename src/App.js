import { Routes, Route } from 'react-router-dom';
import Profile from './components/accounts/Profile';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='*' element={ <Nomatch /> } />
    </Routes>
  </>
)

export default App;

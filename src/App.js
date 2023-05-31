import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Add from './pages/Add';
import Cars from './pages/Cars';
import Update from './pages/Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cars/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/update/:id'  element= {<Update/>} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

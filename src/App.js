import Navbar from './Components/Navbar';

import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import ProductList from './Components/ProductList';
import Update from './Components/Update';
import PrivateComponent from './Components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route element={<PrivateComponent/>}>

          <Route path='/' element={<ProductList/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/update/:id' element={<UpdateProduct/>}/>
          <Route path='/logout' element={<h1>Logout</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
          

          </Route>
          
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

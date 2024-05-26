import { Route, Routes } from 'react-router-dom';
import './App.css';
import GetData from './Components/GetComponents/GetData';
import '@fortawesome/fontawesome-free/css/all.css';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import NavBar from './Components/NavBar/NavBar';
import AboutContactPage from './Components/NavBar/AboutContactPage';
import PostProduct from './Components/PostComponents/PostProduct';
import PutProduct from './Components/EditProduct/PutProduct';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/product/:ID" element={<ViewProduct />} />
        <Route path="/about" element={<AboutContactPage isTrue = {true} />} />
        <Route path="/contact" element={<AboutContactPage />} />
        <Route path="/add-product" element={<PostProduct />} />
        <Route path="/edit-product/:ID" element={<PutProduct />} />
      </Routes>
    </div>
  );
}

export default App;

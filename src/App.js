
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,Link, Navigate } from 'react-router-dom';
import Crud from './APICrud/Crud';
import Update from './APICrud/update'
function App() {
  return (
    <>   
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<div><Crud></Crud></div>}/>
       <Route path="/update/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

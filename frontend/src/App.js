import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Adduser } from "./Components/Adduser";
import { UserList } from "./Components/UserList";
import { Footer } from "./Components/Footer";
import { EditUser } from "./Components/EditUser";
import { NotFound } from "./Components/NotFound";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Navbar /><Adduser /><Footer /></ProtectedRoutes>} />
        <Route path="/userlist" element={<ProtectedRoutes><Navbar /><UserList /><Footer /></ProtectedRoutes>} />
        <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
        <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path="/edit/:id" element={<ProtectedRoutes><Navbar /><EditUser /><Footer /></ProtectedRoutes>} />
        <Route path="*" element={<ProtectedRoutes><NotFound /></ProtectedRoutes>} />
      </Routes>
  
    </div>
  );
}

export function ProtectedRoutes({children}){
  const user = localStorage.getItem('user');
  if(user !== "" && user){
    return children
  }
  else{
    return <Navigate to="/login"/>
  }
}

export function PublicRoutes({children}){
  const user = localStorage.getItem('user');
  if(user !== "" && user){
    return <Navigate to="/"/>
  }
  else{
   return children
  }
}

export default App;

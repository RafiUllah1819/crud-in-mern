import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Adduser } from "./Components/Adduser";
import { UserList } from "./Components/UserList";
import { Footer } from "./Components/Footer";
import { EditUser } from "./Components/EditUser";
import { NotFound } from "./Components/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Adduser />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

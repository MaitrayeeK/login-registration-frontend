import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Signin from './component/Signin';

function App() {
  return (
    <div>
      {/* Routes for components */}
      <Router>
        {/* Default navbar of application */}
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/Signup" element={<Signup/>}>
          </Route>
          <Route exact path="/Signin" element={<Signin/>}>
          </Route>
          {/* If url with admin/Signup than passing props isAdmin as true to set role as admin */}
          <Route exact path="admin/Signup" element={<Signup isAdmin={true}/>}>
          </Route>
          <Route exact path="/dashboard" element={<Dashboard/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

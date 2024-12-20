import "./css/App.css";
import "./css/utility.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import toast, { Toaster } from "react-hot-toast";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

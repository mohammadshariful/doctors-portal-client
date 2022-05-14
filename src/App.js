import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeChange } from "theme-change";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

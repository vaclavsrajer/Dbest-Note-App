import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notes from "./components/Notes/Notes";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import { auth } from "./firebase/firebase.config";

function App() {
  const [showPopup, setShowPopup] = useState({ showPopup: false, message: "" });

  const PrivateRoute = ({ children }) => {
    const isAuthenticated = auth;
    console.log(auth);
  
    if (isAuthenticated) {
      return children;
    }
  
    return <Navigate to="/" />;
  };

  return (
    <>
      {true ? (
        <div className="container">
          <PrivateRoute>
            <Navigation />
          </PrivateRoute>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="contact"
              element={
                <PrivateRoute>
                  <Contact setShowPopup={setShowPopup} />
                </PrivateRoute>
              }
            />
            <Route
              path="notes"
              element={
                <PrivateRoute>
                  <Notes />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      ) : (
        <Popup trigger={showPopup} setTrigger={setShowPopup} />
      )}
    </>
  );
}

export default App;

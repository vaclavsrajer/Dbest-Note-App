import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notes from "./components/Notes/Notes";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/Popup/Popup";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState({ showPopup: false, message: "" });
  
  return (
    <>
      {true ? (
        true ? (
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        ) : (
          <div className="container">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="contact"
                element={<Contact setShowPopup={setShowPopup} />}
              />
              <Route path="notes" element={<Notes />} />
            </Routes>
          </div>
        )
      ) : (
        <Popup trigger={showPopup} setTrigger={setShowPopup} />
      )}
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notes from "./components/Notes/Notes";
import Navigation from "./components/Navigation/Navigation";
import Popup from "./components/Popup/Popup";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState({showPopup: false, message: ""});
  console.log(showPopup)
  return (
    <>
      {true ? (
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact setShowPopup={setShowPopup}/>} />
            <Route path="notes" element={<Notes />} />
          </Routes>
        </div>
      ) : (
        <Popup trigger={showPopup} setTrigger={setShowPopup}/>
      )}
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Assessment from "./Assessment";
import Contact from "./Contact";



const FAQ = () => <h2>FAQ Page Coming Soon</h2>;
const Profile = () => <h2>My Profile Page Coming Soon</h2>;


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home opens first */}
        <Route path="/home" element={<Home />} /> {/* Keep this too */}
        <Route path="/login" element={<Login />} /> {/* Login moved here */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessment" element={<Assessment />} />
        
      </Routes>
    </Router>
  );
}

export default App;

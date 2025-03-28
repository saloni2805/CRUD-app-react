import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import Contact from "./components/Contact";
import Users from "./components/Users";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

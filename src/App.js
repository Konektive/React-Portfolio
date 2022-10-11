import "./App.css";
import Welcome from "./pages/Welcome";
import MyWork from "./pages/MyWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Form from "./components/Form/Form";
// import Navbar from "./components/Navbar/Navbar";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showForm, setShowForm] = useState(false);

  const changeForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Navbar showForm={changeForm} />
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/mywork" element={<MyWork />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Welcome />} />
        {/* this works same as redirect in react router v5 */}
      </Routes>
      {showForm ? <Form showForm={changeForm} /> : null}
    </>
  );
}

export default App;

//Swtich around routes so just one route can be activated
//Switch --> Routes react-router v6 You dont need to use exact
//exact prop in Route makes site load just when ULR is exactly like the one in path

//nested Route can be whereever you want but the URL needs to look like "/welcome/new-user" if its nested in welcome to show

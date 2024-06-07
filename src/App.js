import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
function App() {
    // const myStyle={
    //   color:"orange",
    //   backgroundColor:"pink",
    //   height:"100vh"
    // };
    return (
      <div className="App">
        {/* <center><h1 style={myStyle}>Accelerlab </h1></center> */}
      <center><h1 style={{color: "red",backgroundColor:"blue"}}>Accelerlab </h1></center>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/home" element={<Layout><Home/></Layout>}/>
            <Route path="/blogs" element={<Layout><Blogs/></Layout>}/>
            <Route path="/contact" element={<Layout><Contact/></Layout>}/>
            <Route path="*" element={<Layout><NoPage/></Layout>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;

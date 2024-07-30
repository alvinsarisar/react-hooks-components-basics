import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import Navbar from "./Navbar";
import Home from  "./Home";
import About from "./About";
function App() {
  return (
    
    <div>
      <Navbar />
      <Home />
      <About />
      <Article />
      <Comment />
    </div>
  );
}

export default App;

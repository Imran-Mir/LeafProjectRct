import React from "react";
import "./App.css";
import Specification from "./view/Specification";
import Feature from "./view/Feature";

function App() {
  return (
    <div className="App">
      <Specification />
      <Feature />
      {/* {showDialog && <Dialog handleClose={handleClose} />} */}
    </div>
  );
}

export default App;

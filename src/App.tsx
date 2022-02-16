import React from "react";

import "./App.css";

import UploadImagePreview from "./components/UploadImagePreview";

const App = () => {
  document.title = "ReactJS-UploadImagePreview";
  return (
    <div className="App">
      <h1>{document.title}</h1>
      <UploadImagePreview />
    </div>
  );
};

export default App;

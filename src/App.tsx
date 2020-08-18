import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./ecosystems/Routes";

function App() {
  return (
    <React.Suspense fallback="loading">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;

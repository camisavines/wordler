import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starter from "./pages/starter";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <h1>BrowserRouter</h1>
      
      <Routes>
        <Route exact path="/wordler" element={ <Starter/> } />
        <Route exact path="/home" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

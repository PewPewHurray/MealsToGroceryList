import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Welcome from "./views/Welcome";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome/>} path="/"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <div className=" flex h-screen justify-between items-start w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>   
      
      
    </div>
  );
}

export default App;
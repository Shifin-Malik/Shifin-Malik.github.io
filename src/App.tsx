import { Route, Routes } from "react-router-dom";
import More from "./components/More";
import Home from "./pages/Home";
import GetInTouch from "./components/GetInTouch";
function App() {
  return (
       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<More />} />
          <Route path="/contact" element={<GetInTouch />} />
        </Routes>
      </div>
    
  );
}

export default App;

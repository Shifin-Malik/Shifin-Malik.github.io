import { Route, Routes } from "react-router-dom";
import More from "./components/More";
import Home from "./pages/Home";
import GetInTouch from "./components/GetInTouch";
function App() {
  return (
   
       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<More />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
      </div>
    
  );
}

export default App;

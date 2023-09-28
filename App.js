import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColor from "./NewColor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/:color" element={<Color />} />
          <Route path="/colors/new" element={<NewColor />} />
          <Route path="*" element={<Navigate to={"/colors"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

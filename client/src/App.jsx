import "./App.css";
import { Routes, Route } from "react-router-dom";



import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";


function App() {
  // const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          
        </Routes>
      </>
  );
}
export default App;
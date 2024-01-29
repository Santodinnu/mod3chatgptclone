import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles"


import { themeSettings } from "./theme.js";

import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;

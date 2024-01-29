import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles"


import { themeSettings } from "./theme.js";

import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;

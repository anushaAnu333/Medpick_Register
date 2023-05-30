import logo from "./logo.svg";
import "./App.css";

import MainRoutes from "./Routes/MainRoutes";
// import { red } from "@mui/material/colors";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });
function App() {
  return <MainRoutes />;
}
export default App;

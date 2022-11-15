import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Notification from "./components/Notification";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
      <Notification />
    </BrowserRouter>
  );
}

export default App;

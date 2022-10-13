import "antd/dist/antd.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

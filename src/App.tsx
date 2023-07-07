import { Page } from "./components";
import Home from "./pages/Home";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

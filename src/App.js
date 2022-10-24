import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./route/route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

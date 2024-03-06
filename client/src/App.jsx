import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

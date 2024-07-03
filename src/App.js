import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const API=import.meta.env.VITE_API_URL
  return (
<div>
  <h1>
    Hello World
  </h1>
  {/* <Router>
    <NavBar/>

  </Router> */}
</div>

  );
}

export default App;

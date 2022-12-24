import "./styles/app.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="content">
      <Navbar />
      <Landing />
    </div>
  )
}

export default App;

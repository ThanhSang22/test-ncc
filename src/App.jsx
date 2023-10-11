import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Content className="content" />
    </div>
  );
}

export default App;

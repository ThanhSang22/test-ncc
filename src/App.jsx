import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="content">
        <Content />
        <div className="footer">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage";
import Topbar from "./components/inApp/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Topbar" component={Topbar} />

      </BrowserRouter>
    </div>
  );
}

export default App;

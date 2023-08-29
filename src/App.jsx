import "./App.css";
import BeerContainer from "./containers/BeerContainer";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BeerContainer />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul type="none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Favorites() {
  return (
    <div>
      <h2>Favorites</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import Slogan from "./pages/Slogan";
import Target from "./pages/Target";
import Competitive from "./pages/Competitive";
import Market from "./pages/Market";
import Difference from "./pages/Difference";
import Table from "./table";
import PageNotFound from "./PageNotFound.jsx";

const ROUTE_CONFIG = [
  { id: 0, path: "/about", content: About, linkValue: "About" },
  { id: 1, path: "/team", content: Team, linkValue: "Our Team" },
  { id: 2, path: "/mission", content: Mission, linkValue: "Mission" },
  { id: 3, path: "/slogan", content: Slogan, linkValue: "Slogan" },
  { id: 4, path: "/target", content: Target, linkValue: "Target" },
  {
    id: 5,
    path: "/competitive",
    content: Competitive,
    linkValue: "Competitive",
  },
  { id: 6, path: "/market", content: Market, linkValue: "Market Strategy" },
  { id: 7, path: "/difference", content: Difference, linkValue: "Difference" },
  { id: 8, path: "/table", content: Table, linkValue: "Table" },
];

const App = () => (
  <Router>
    <nav className="nav">
      <ul className="nav__list">
        {ROUTE_CONFIG.map((config) => {
          const { id, path, linkValue } = config;

          return (
            <NavLink to={path} className="nav__item" key={id}>
              {linkValue}
            </NavLink>
          );
        })}
      </ul>
    </nav>
    <Switch>
      {ROUTE_CONFIG.map((config) => {
        const { id, path, content } = config;

        return <Route exact path={path} component={content} key={id} />;
      })}
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;

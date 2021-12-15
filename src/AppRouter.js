import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { Redirect } from "react-router";

const AppRouter = () => {


  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Favorites" component={Favorites} />
          <Redirect from={"/"} to={"/Home"} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;

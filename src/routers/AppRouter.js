import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageProject from '../pages/PageProject';


function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact><PageHome /></Route>
            <Route path="/index.html" exact><PageHome /></Route>
            <Route path="/project/:id"><PageProject /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
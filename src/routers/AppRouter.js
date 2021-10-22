import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        {/* <Header /> */}
        <main className="main">
          <Switch>
          </Switch>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default AppRouter;
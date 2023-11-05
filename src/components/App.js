import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

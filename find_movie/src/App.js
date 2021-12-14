import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';




import { GlobalStyle } from './GlobalStyle';




const App = () => {
  return (
    <div className="App">
    <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:movieId' component={Movie} />
            <Route exact  component={NotFound} />
        </Switch>
    </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

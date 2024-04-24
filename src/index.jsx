import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import Home from './pages/Home';
import { GlobalContextProvider } from './stores/GlobalStore';

const App = props => (
    <GlobalContextProvider>
        <h1>My Site with lots of pages</h1>
        {props.children}
    </GlobalContextProvider>
);

const root = document.getElementById('root');

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
  </Router>
), root);

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './Components/App';
import Home from './Components/Home';
import Market from './Components/Market';
import Help from './Components/Help';
import Shipping from './Components/Shipping';
import ThankYou from './Components/ThankYou';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Root = () => (
    <MuiThemeProvider>
        <Router>
            <div>
                <App>
                    <Route exact path="/" component={Market} />
                    <Route path="/home" component={Home} />
                    <Route path="/market" component={Market} />
                    <Route path="/help" component={Help} />
                    <Route path="/shipping/:sku" component={Shipping} />
                    <Route path="/thankyou" component={ThankYou} />
                </App>
            </div>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));


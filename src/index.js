import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './javascripts/components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { committee, events, futureTrips, pastEvents, trips } from './localState'

export const client = new ApolloClient({
  clientState: {
    defaults: {
      committee,
      events,
      pastEvents,
      futureTrips,
      trips,
    },
    resolvers: {}
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

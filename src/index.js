import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './javascripts/components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  clientState: {
    defaults: {
      isConnected: true
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          cache.writeData({ data: { isConnected }});
          return null;
        }
      }
    }
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

Amplify.configure(config);

Amplify.addPluggable(
    new AWSIoTProvider({
      aws_pubsub_region: 'us-east-1',
      aws_pubsub_endpoint:
        'wss://ajoorzya8zk5s-ats.iot.us-east-1.amazonaws.com/mqtt'
    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

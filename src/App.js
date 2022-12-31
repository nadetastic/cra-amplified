import logo from './logo.svg';
import './App.css';
import { PubSub, Hub } from 'aws-amplify';

function App() {
  Hub.listen('pubsub', (data) => {
    const { payload } = data;
    console.log(payload)
  });

const pubToTopic = async () => {
    // console.log('...',PubSub.configure())
    try {
        const res = await PubSub.publish('amplify4', { msg: 'Hello world! from Vite' }, { provider: 'AWSIoTProvider' });
        console.log('Message published',res);
    } catch (error) {
        console.log('Error publishing message', error);
    }
};

PubSub.subscribe('amplify3').subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    complete: () => console.log('Done'),
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br />
        <button onClick={pubToTopic}>Publish to Topic</button>
      </header>
    </div>
  );
}

export default App;

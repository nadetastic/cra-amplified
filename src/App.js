import logo from './logo.svg';
import './App.css';
import { Auth, Hub } from 'aws-amplify';

function App() {
  Hub.listen('auth', (data) => {
    const { payload } = data;
    console.log(payload)
  });

  const currentUser = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser();
      console.log(data);
    } catch(err) {
      console.log(err);
    } 
  };



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
        <button onClick={currentUser}>Get Current User</button>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */
        <img src = "flower.jpg" alt="flower"/>}
        <p>
        React (also known as React.js or ReactJS) is a free and open-source front-end 
        JavaScript library for building user interfaces based on components. 
        It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
        </p>
        <button onClick={() => alert('You clicked this button')}>Click Me!</button>

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

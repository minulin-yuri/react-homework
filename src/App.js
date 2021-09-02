import './App.css';
import Message from './components/Message';

function App() {
  const text = 'some text here';
  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
      </header>
    </div>
  );
}

export default App;

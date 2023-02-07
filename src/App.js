import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Button className={`bg-violet-50`}>
        Hi there!
      </Button>
    </div>
  );
}

export default App;

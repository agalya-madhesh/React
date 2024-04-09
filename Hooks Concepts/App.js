import './App.css';
import './Components/Todo.css';
import Counter from "./Components/Practice.js";
import Todolist from './Components/Todolist.js';

function App() {
  return (
    <div className="container">
      <div className="counts">
        <Counter />
      </div>
      <div className="tasks">
        <Todolist />
      </div>
    </div>
  );
}

export default App;

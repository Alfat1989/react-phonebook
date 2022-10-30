import "../App.css";
// import { addTodo } from "../redux/todos/todos-actions";
import Contacts from "./Contacts";
import Filter from "./Filter";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;

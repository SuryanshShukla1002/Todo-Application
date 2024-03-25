import AddToDo from "./components/addtodo";
import Todos from "./components/todos";

const App = () => {
  return (
    <main>
      <h1>TODO APPLICATION</h1>
      <AddToDo />
      <Todos />
    </main>
  );
};
export default App;

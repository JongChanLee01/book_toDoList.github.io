import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </div>
  );
}

export default App;

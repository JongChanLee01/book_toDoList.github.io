import { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id:2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id:3,
      text: "리액트의 기초 알아보기",
      checked: false,
    },
  ]);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        {/* TodoList.js로 props를 이용하여 todos 배열을 보냄 */}
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;

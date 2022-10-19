import { useState, useRef, useCallback } from "react";
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

  // 고유값으로 사용되는 id
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos],
  );

  const onRemove = useCallback(
    id => {
      // 필터 함수가 특정 조건을 만족하는 원소들만 추출하여 새로운 배열을 만들어주는데
      // 여기서 필터함수를 이용하여 id를 인자로 받은 후 todos 배열에서
      // id가 일치하지 않는것들만 모아서 새로운 배열을 만들게되면
      // 결국 id가 일치하는 것이 제거가 되는 기능을 만들 수 있음
      setTodos(todos.filter(todo => todo.id !==id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        // ...todo에서 ...은 스프레드 연산자라고 함
        // ...(스프레드연산자)는 기존 배열객체의 값을 그대로 복사해서 가져와 사용하게 하는 연산자
        // 복사를 해서 사용하는 것이기 때문에 복사해온것에서 값을 바꿔도 기존의 배열값에는 영향이 없음
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,),
      );
    }, [todos],
  )

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        {/* TodoList.js로 props를 이용하여 todos 배열을 보냄 */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;

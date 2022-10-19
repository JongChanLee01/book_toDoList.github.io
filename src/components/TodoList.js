import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                // TodoListItem으로 todo 데이터를 보냄
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
            {/* <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
        </div>
    )
}

export default TodoList;
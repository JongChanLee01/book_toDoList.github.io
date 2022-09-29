// https://react-icons.netlify.com/#/icons/md
// import { 아이콘 이름 } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="오늘의 할 일을 입력해주세요." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
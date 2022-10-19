import { useState, useCallback } from "react";
// https://react-icons.netlify.com/#/icons/md
// import { 아이콘 이름 } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({onInsert}) => {
  const [ value, setValue ] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

const onSubmit = useCallback(
  e => {
    onInsert(value);
    setValue(''); // value 값 초기화

    // submit 이벤트는 브라우저에서 새로고침을 실행시키는데 이것을
    // 막기 위해서 preventDefault()를 사용
    e.preventDefault();
  }, [onInsert, value],
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="오늘의 할 일을 입력해주세요." value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
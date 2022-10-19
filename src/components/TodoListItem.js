import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";

// classnames 모듈 : 여러 클래스를 추가할 때 뿐만 아니라,
// 특정 값이 ture/false (조건부)에 따라
// 클래스명을 추가하거나 추가하지 않도록 할수있게 해줌
import cn from "classnames";

import "./TodoListItem.css";

// const TodoListItem = () => {
//     return (
//         <div className="TodoListItem">
//             <div className="checkbox">
//                 <MdCheckBoxOutlineBlank />
//                 <div className="text">할 일</div>
//             </div>
//             <div className="remove">
//                 <MdRemoveCircleOutline />
//             </div>
//         </div>
//     )
// }
const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoListItem">
            <div className={cn("checkbox", { checked })} onClick={()=>onToggle(id)} >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=> onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoListItem;
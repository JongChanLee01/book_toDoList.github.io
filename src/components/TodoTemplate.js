import "./TodoTemplate.css";

const TodoTemplate = ({children}) => {
    return (
        <div>
            <div className="TodoTemplate">
                <div className="app_title">
                    일정 관리
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TodoTemplate;
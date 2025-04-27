import React from 'react';
import { TodoItemContainerJss, ActionsContainerJss } from './jss';

interface TodoUiProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoItemUiProps {
  todo: TodoUiProps,
}

const TodoItemUi: React.FC<TodoItemUiProps> = (
  props
) => {
  return (
    <TodoItemContainerJss>
      <input type="checkbox" checked={props.todo.isCompleted} readOnly />
      <span>{props.todo.text}</span>
      <ActionsContainerJss>
        <div>Edit</div>
        <div>Delete</div>
      </ActionsContainerJss>
    </TodoItemContainerJss>
  );
};

export default TodoItemUi;

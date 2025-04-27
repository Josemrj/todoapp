import React from 'react';
import { TodoItemContainerUi, ActionsContainerUi } from './styles';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemUiProps {
  todo: Todo;
}

const TodoItemUi: React.FC<TodoItemUiProps> = ({
  todo
}) => {
  return (
    <TodoItemContainerUi>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
      <ActionsContainerUi>
        <div>Edit</div>
        <div>Delete</div>
      </ActionsContainerUi>
    </TodoItemContainerUi>
  );
};

export default TodoItemUi;

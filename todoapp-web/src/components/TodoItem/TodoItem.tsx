import React from 'react';
import { TodoItemStyle, ActionsContainer } from './styles';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <TodoItemStyle>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
      <ActionsContainer>
        <div>Edit</div>
        <div>Delete</div>
      </ActionsContainer>
    </TodoItemStyle>
  );
};

export default TodoItem;
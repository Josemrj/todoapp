import React from 'react';
import TodoItemUi from '../../components/TodoItem/TodoItem';
import { TodoListContainer } from './styles';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItemUi key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

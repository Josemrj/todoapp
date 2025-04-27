import React from 'react';
import TodoItemUi from '../todo-item';
import { TodoListContainerJss } from './jss';

interface TodoProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

import React from 'react';
import styled from 'styled-components';

// components
import TodoItem from './TodoItem';
// context
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    // 차지하는 영역을 모두 채우도록 설정
    flex: 1;

    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    const todos = useTodoState();
    
    return  (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
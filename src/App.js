import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Todo와 관련된 모든 Context를 사용하도록 Provider를 가져옴
import { TodoProvider } from './TodoContext';

// components
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D3DEDC;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;

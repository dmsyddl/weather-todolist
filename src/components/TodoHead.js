import React from "react";
import styled from "styled-components";

// components
import Weather from "../Weather";
// content
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  // padding or margin을 한 줄로 작성할 때 시계 방향으로 돌아감(상-우-하-좌)
  padding: 40px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .head-left {
    color: #7c99ac;
    font-size: 20px;
    margin-top: 10px;
  }
  .head-right {
    color: #7c99ac;
    font-size: 20px;
    margin-top: 25px;
    font-weight: bold;
    text-align: right;
  }
`;
const TodoHead = () => {
  const todos = useTodoState(); // 적힌 todoitem들을 모두 가져옴
  const undone = todos.filter((todo) => !todo.done);

  // 현재 날짜 표기하기
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR");
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" }); //weekday : short의 경우 '화' 이런식으로 표시됨

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="head-left">오늘의 날씨</div>
      <div className="head-right">남은 할 일 {undone.length}</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;

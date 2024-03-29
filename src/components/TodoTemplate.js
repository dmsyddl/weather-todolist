import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  // 박스 하단에 추가 버튼을 위치시키기 위해 설정한다
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto; // 페이지 중앙에 나타나도록 설정
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

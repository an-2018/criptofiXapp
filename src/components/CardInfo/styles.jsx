import styled from "styled-components";

export const Container = styled.div`
  grid-area: G;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #1c0c3b;
  color: #fff;

  position: relative;
  height: 149px;
  margin: 10px 20px 10px 20px;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

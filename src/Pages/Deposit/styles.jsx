import styled from "styled-components";

export const Container = styled.div`
  grid-area: G;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #fff;

  position: relative;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  .maxwidth {
    width: -webkit-min-content;
  }
`;

export const ContainerCard = styled.div`
  grid-area: G;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 200px 10px 200px;
  color: #fff;

  position: relative;
  max-height: 128px;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

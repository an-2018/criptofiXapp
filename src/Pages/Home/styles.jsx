import styled from "styled-components";
import background from "../../assets/home_background.svg";

export const Container = styled.div`
  grid-area: MC;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 700px;
  flex-shrink: 0;

  .maxwidth {
    max-width: 360px;
  }

  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

export const Grid = styled.div`
  display: grid;

  background-color: #fff;

  grid-template-columns: 350px auto 400px;
  grid-template-rows: auto 200px;

  grid-template-areas:
    "LC MC RC"
    "LC  F  RC";
  height: 100vh;
  width: 100vw;

  margin-bottom: -520px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto;

  @media (max-width: 768px) {
    grid-template-columns: 48px auto 48px;
    grid-template-rows: auto 200px;
    background-position: right top;
  }
`;

export const ContainerTech = styled.div`
  grid-area: F;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img {
    margin: 60px 20px 20px 20px;
  }
`;

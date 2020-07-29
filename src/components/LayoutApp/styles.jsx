import styled from 'styled-components'
export const Grid = styled.div`
  display: grid;

  background-color: #fff;

  grid-template-columns: 72px 150px auto 150px;
  grid-template-rows: 72px auto 72px;

  grid-template-areas:
    "A B C D"
    "E F G H"
    "I J K L";
  height: 100vh;
  width: 100vw;

  margin-bottom: -520px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 48px 75px auto 75px;
    grid-template-rows: 48px auto 48px;
  }
`;
import styled from "styled-components";

export const ButtonArea = styled.div`
#page-home .content main a {
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: #322153;
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 40px;
}

#page-home .content main a span {
  display: block;
  background: #1C0C3B; /*rgba(0, 0, 0, 0.08);*/
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

#page-home .content main a span svg {
  color: #FFF;
  width: 20px;
  height: 20px;
}

#page-home .content main a strong {
  flex: 1;
  text-align: center;
  color: #FFF;
}

#page-home .content main a:hover {
  background: #9B51E0;
}

@media(max-width: 900px) {
  #page-home .content {
    align-items: center;
    text-align: center;
  }

  #page-home .content header {
    margin: 48px auto 0;
  }

  #page-home .content main {
    align-items: center;
  }

  #page-home .content main h1 {
    font-size: 42px;
  }

  #page-home .content main p {
    font-size: 24px;
  }
`;

import styled from "styled-components";

const LayoutStyled = styled.div`
  margin: 0;
  block-size: 100vh;
  inline-size: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;

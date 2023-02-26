import styled from "styled-components";

const HeaderStyled = styled.header`
  margin: 0;
  block-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 220, 220);

  padding: 1rem;
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>Mi formulario</h1>
    </HeaderStyled>
  );
}

export default Header;

import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: rgb(220, 220, 220);

  block-size: 1rem;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
`;

function Footer() {
  return (
    <FooterStyled>
      <p>For Julian Pinzón</p>
    </FooterStyled>
  );
}

export default Footer;

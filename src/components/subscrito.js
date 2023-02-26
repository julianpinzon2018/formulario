import styled from "styled-components";
import { Link } from "react-router-dom";

const SubscritoStyled = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  background-color: rgb(220, 220, 220);
  border-radius: 0.5rem;
  inline-size: 50%;
  position: relative;
  * {
    margin: 0;
  }
  margin: auto;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  }
  .close {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;

function Subscrito({ html }) {
  return (
    <SubscritoStyled>
      <Link className="close" to="/">
        x
      </Link>
      <h3>Subscrito exitosamente</h3>
      <p>Nombre: {html.name}</p>
      <p>Edad: {html.age} años</p>
      <p>Ubicación: {html.location}</p>
      <p>Cédula: {html.cedula}</p>
      <p>Email: {html.email}</p>
    </SubscritoStyled>
  );
}

export default Subscrito;

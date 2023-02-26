import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormStyled = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.5rem;
  }
  .input {
    padding: 0.5rem;
    inline-size: 20rem;
    border: none;
    border: 1px solid gray;
    border-radius: 0.5rem;
    text-align: center;
    font-size: 1rem;
    block-size: 2rem;
    inline-size: 30rem;
  }
  .button {
    inline-size: 6rem;
    block-size: 2rem;
    border-radius: 100px;
    border: none;
    background-color: gray;
    color: white;
    cursor: pointer;
    block-size: 2.8rem;
    inline-size: 8rem;
    font-size: 1.2rem;
  }
`;

function Formulario({ setHtml }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age > 0) {
      setHtml({ name, age, location, cedula, email });
      return navigate("/subscrito");
    }
  };
  return (
    <FormStyled>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          Nombre
          <input
            required
            className="input"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Pepito Perez..."
          />
        </label>
        <label className="label" htmlFor="age">
          Cedula
          <input
            required
            className="input"
            name="cedula"
            type="number"
            placeholder="1121875..."
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </label>
        <label className="label" htmlFor="age">
          Edad
          <input
            required
            className="input"
            name="age"
            type="number"
            placeholder="18..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label className="label" htmlFor="age">
          Email
          <input
            required
            className="input"
            name="email"
            type="email"
            placeholder="pepito@correo..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="label" htmlFor="location">
          Ubicación
          <input
            required
            className="input"
            name="location"
            type="text"
            placeholder="Bogota..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <input className="button" type="submit" value="Enviar" />
      </form>
    </FormStyled>
  );
}

export default Formulario;

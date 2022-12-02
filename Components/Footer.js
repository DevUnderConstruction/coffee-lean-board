import styled from "styled-components";
export default function Footer({ onNewEntry }) {
  const submit = (e) => {
    e.preventDefault();
    onNewEntry({
      name: e.target.elements.name.value,
      text: e.target.elements.text.value,
    });
  };
  return (
    <StyledForm onSubmit={submit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder=".....your thoughts"
        required
      />

      <input
        type="text"
        id="text"
        name="text"
        placeholder="your name"
        required
      />

      <button type="submit">+</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background: var(--primary-color);
  border-top: 2px dashed var(--third-color);
  width: 100%;
  height: 100px;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  input {
    font-size: 20px;
    background: var(--secondary-color)
    
  }
  input::placeholder {
    color: var(--primary-color);
    opacity:0.8;
    transition: opacity 1s;
  }
  button {
    width: 50px;
    font-size: 45px;
    color: var(--fifth-color);
    background: transparent;
    border: o solid;
    cursor: pointer;
    border: none;
    
    &:hover {
      
      color: var(--fourth-color);
      font-size: 65px;
     
    }
`;

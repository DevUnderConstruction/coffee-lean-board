import styled from "styled-components";
export default function Header() {
  return (
    <StyledHeader>
      <h1>Lean Coffee Board </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 2px dashed var(--third-color);
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background: var(--primary-color);
  h1 {
    text-align: center;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
  }
  h1::before,
  h1::after {
    content: ">>  ";
    color: var(--third-color);
  }
`;

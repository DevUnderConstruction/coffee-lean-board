import styled from "styled-components";
import { useState } from "react";
export default function Card({ entries, onDelete }) {
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    return setEdit(true);
  }
  return (
    <StyledList>
      {entries.map((entry) => (
        <li key={entry.id} id={entry.id}>
          <h2>{entry.text}</h2>
          <p>{entry.name}</p>
          <div>
            <button onClick={() => onDelete(entry.id)}>--</button>
            <button onClick={() => handleEdit()}>...</button>
          </div>
        </li>
      ))}
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>name</p>
      </li>
    </StyledList>
  );
}
const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 180px;
  margin-bottom: 150px;
  background: --var(--primary-color);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-auto-rows: auto;
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;
  li h2::before {
    content: ">>  ";
    color: var(--third-color);
  }
  li p::before {
    content: ">>  ";
    color: var(--third-color);
  }
  li p {
    padding-left: 1.4rem;
  }
  li h2 {
    padding-right: 40px;
  }
  li {
    word-break: break-all;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 15px 5px;
    position: relative;
    border-bottom: 2px dashed var(--third-color);
    div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      background: --var(--primary-color);
      button {
        font-size: 24px;
        color: var(--fifth-color);
        background: transparent;
        border: o solid;
        cursor: pointer;
        border: none;
        &:hover {
          color: var(--fourth-color);
          font-size: 34px;
        }
      }
    }
  }
`;

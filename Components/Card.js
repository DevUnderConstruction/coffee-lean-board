import styled from "styled-components";
import { useState } from "react";
export default function Card({ entries, onDelete, onEdit, onChange }) {
  const changeEdit = (e) => {
    e.preventDefault();
    onChange(id, e.target.value);
  };
  const saveEdit = (e) => {
    e.preventDefault();
    onEdit(id, edit);
  };

  return (
    <StyledList>
      {entries.map((entry) => (
        <li key={entry.id} id={entry.id}>
          <h2>{entry.name}</h2>
          <div>
            <button onClick={() => onDelete(entry.id)}>--</button>
            <button onClick={() => onEdit(entry.id, entry.edit)}>...</button>
          </div>
          {entry.edit === true ? (
            <form onSubmit={saveEdit}>
              <textarea
                id="edit"
                type="text"
                name="edit"
                value={entry.text}
                onChange={changeEdit}
                defaultValue={entry.text}
              ></textarea>
              <button>+</button>
            </form>
          ) : (
            <p>{entry.text}</p>
          )}
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
    padding-left: 1.1rem;
  }
  li h2 {
    padding-right: 30px;
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

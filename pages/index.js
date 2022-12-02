import { useState } from "react";
import Footer from "../Components/Footer.js";
import Header from "../Components/Header.js";
import { nanoid } from "nanoid";
import Card from "../Components/Card.js";
export default function HomePage() {
  const [entries, setEntries] = useState([]);

  const handleEntries = (newEntry) => {
    setEntries([{ ...newEntry, id: nanoid() }, ...entries]);
  };

  function handleDelete(id) {
    const updatedEntries = entries.filter((entry) => {
      return entry.id !== id;
    });
    setEntries(updatedEntries);
  }

  console.log(entries);
  return (
    <>
      <Header />
      <Card onDelete={handleDelete} entries={entries} />
      <Footer onNewEntry={handleEntries} />
    </>
  );
}

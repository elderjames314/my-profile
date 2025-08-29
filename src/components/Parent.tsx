import { useState } from "react";
import "./Child";
import Fruit from "./Fruit";

export default function Parent() {
  const persons = [
    {
      name: "Favour",
      id: 1,
    },
    {
      name: "James",
      id: 2,
    },
    {
      name: "Samuel",
      id: 3,
    },
  ];

  const [persons1, setPersons] = useState(persons);
  const [addText, setAddText] = useState("");

  function remove() {
    //remove item from persons array
    const newPersons = persons1.filter((person) => person.id > 1);
    setPersons(newPersons);
  }

  function add() {
    //this will add another person to the a const newValue = setAddText(addText);
    const obj = {
      name: addText,
      id: 34 + addText.length,
    };

    const combines = [...persons1, obj];
    setPersons(combines);
    setAddText("");
  }

  return (
    <div>
      <input
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
      />
      <Fruit persons={persons1} add={add} remove={remove} />
    </div>
  );
}

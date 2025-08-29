interface Person {
  name: string;
  id: number;
}

interface Myperson {
  persons: Person[];
  add: () => void;
  remove: () => void;
}

export default function Fruit({ persons, add, remove }: Myperson) {
  //   const fruits = ["Orange", "Banana", "Apple"];

  return (
    <div>
      {persons.map((person) => (
        <li key={person.id}>
          {" "}
          {person.id} :: {person.name}
        </li>
      ))}
      <br />
      <button onClick={add}>Add</button> <br />
      <button onClick={remove}>Remove</button>
    </div>
  );
}

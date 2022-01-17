import Input from "./components/Input";
import Card from "./components/Card";

import { useState } from "react";
import "./App.css";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);

  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const newUser = { name, age, hobby };

    if (newUser.hobby && newUser.name !== "") {
      setUsers([...users, newUser]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Cadastre-se</h3>

        <div onSubmit={() => console.log("foi")}>
          <Input
            placeholder={"Insira o seu nome"}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={"Insira a sua idade"}
            type="number"
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <Input
            placeholder={"Insira o seu hobby"}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button type="submit" onClick={() => handleSubmit(name, age, hobby)}>
            Enviar
          </button>
        </div>

        <hr />

        {users.length !== 0 ? (
          <h2>Usuários</h2>
        ) : (
          <span>Ainda não temos usuários cadastrados</span>
        )}

        <div className="seguraCard">
          {users.length !== 0 &&
            users.map((user) => (
              <Card
                age={user.age}
                key={user.name}
                name={user.name}
                hobby={user.hobby}
              />
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;

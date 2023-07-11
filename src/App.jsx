import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = Contacts.slice(0, 5);
  const [firstFiveData, setFirstFiveData] = useState(fiveContacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        {firstFiveData.map((Contact) => {
          return (
            <tbody key={Contact.id}>
              <tr>
                <td>
                  <img style={{ width: 100 }} src={Contact.pictureUrl}></img>
                </td>
                <td>{Contact.name}</td>
                <td>{Contact.popularity.toFixed(2)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;

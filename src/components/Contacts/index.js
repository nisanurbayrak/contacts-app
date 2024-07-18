import { useState, useEffect } from "react";
import List from "./List/index";
import Form from "./Form/index";
import "./styles.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "nisa", phone_number: "0556 123 98" },
    { fullname: "buse", phone_number: "0555 345 54" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContanct={setContacts} contacts={contacts} />
    </div>
  );
}
export default Contacts;

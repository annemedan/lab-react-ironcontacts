import { useState } from "react";
import contactsJSON from "./../contacts.json";
import ContactCard from "./ContactCard";

function ContactList() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5)
  );

  const addRandomCeleb = () => {
    const updatedRemainingContacts = [...remainingContacts];

    let randomIndex = Math.floor(Math.random() * remainingContacts.length);
    let moveCeleb;
    if (updatedRemainingContacts.length !== 0) {
      moveCeleb = updatedRemainingContacts.splice(randomIndex, 1);
    } else {
      return;
    }
    //console.log("moveCeleb", moveCeleb);

    const updatedContacts = [...contacts, moveCeleb[0]];

    setRemainingContacts(updatedRemainingContacts);
    setContacts(updatedContacts);
    //console.log("after push", contacts);
  };

  const sortByName = () => {
    const nameSort = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log("nameSort", nameSort);

    setContacts(nameSort);
  };

  const sortByPopularity = () => {
    const popSort = [...contacts].sort((a, b) => b.popularity - a.popularity);
    console.log("popSort", popSort);

    setContacts(popSort);
  };

  const deleteCeleb = (celebId) => {
    const filteredCelebs = contacts.filter((celeb) => {
      return celeb.id !== celebId;
    });

    setContacts(filteredCelebs);
  };

  return (
    <div className="contact-list">
      <h1> IronContacts</h1>
      <button onClick={addRandomCeleb}> Add Random Contact </button>
      <button onClick={sortByName}> Name: A-Z </button>
      <button onClick={sortByPopularity}> Popularity: Highest-Lowest </button>
      <table id="contacts">
        <tr>
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity</th>
          <th> Won an Oscar</th>
          <th> Won an Emmy</th>
          <th> Actions </th>
        </tr>
        {contacts.map((celebrity) => {
          return (
            <ContactCard
              celebrityObj={celebrity}
              deleteCelebFunction={deleteCeleb}
            />
          );
        })}
      </table>
    </div>
  );
}

export default ContactList;

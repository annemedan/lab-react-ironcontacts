function ContactCard({ celebrityObj, deleteCelebFunction }) {
  return (
    <tr key={celebrityObj.id}>
      <td>
        <img src={celebrityObj.pictureUrl} alt="Celeb" />
      </td>
      <td> {celebrityObj.name} </td>
      <td> {Math.round(celebrityObj.popularity * 100) / 100} </td>
      <td> {celebrityObj.wonOscar ? " 🏆 " : null} </td>
      <td> {celebrityObj.wonEmmy ? " 🏆 " : null} </td>
      <td>
        <button onClick={() => deleteCelebFunction(celebrityObj.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactCard;

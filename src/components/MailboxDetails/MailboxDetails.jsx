import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  if(!selectedBox) {
    return <h2>Mailbox not found!</h2>
  }
  const selectedLetters = props.letters.filter((letter) => (letter.mailboxId === Number(mailboxId)
));

  return (
    <div>
      <h1>Mailbox {mailboxId} </h1>
      <h2>Details</h2>
      <dl>
        <dt>Owner:</dt>
        <dd>{selectedBox.owner}</dd>
        <dt>Size:</dt>
        <dd>{selectedBox.size}</dd>
      </dl>
      <h2>Letters</h2>
      {selectedLetters.length > 0 ? (
        <ul>
          {selectedLetters.map((letter)=> (
            <li key={letter._id}>
              <p>{letter.recipient}</p>
              <p>{letter.message}</p>
            </li>
        ))}
        </ul>
      ) : (
        <p> No letters in this mailbox yet!</p>
      )}
    </div>
  );
};

export default MailboxDetails;

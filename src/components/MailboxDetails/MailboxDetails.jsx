import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  if(!selectedBox) {
    return <h2>Mailbox not found!</h2>
  }

  return (
    <div>
      <h2>Mailbox {mailboxId}'s Details</h2>
      <dl>
        <dt>Owner</dt>
        <dd>{selectedBox.owner}</dd>
        <dt>Size</dt>
        <dd>{selectedBox.size}</dd>
      </dl>
    </div>
  );
};

export default MailboxDetails;

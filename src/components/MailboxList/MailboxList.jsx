import { Link } from "react-router-dom";

const MailboxList = (props) => {

  return (
    <>
      <div>
        <h1>Mailboxes</h1>
        <ul>
          {props.mailboxes.map((mailbox) => (

            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox {mailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MailboxList;

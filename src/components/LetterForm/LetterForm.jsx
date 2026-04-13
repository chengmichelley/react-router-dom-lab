import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LetterForm = ({ addLetter, mailboxes }) => {
  const [formData, setFormData] = useState({ mailboxId: "", recipient: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({...formData, mailboxId: Number(formData.mailboxId)});
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select A Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          <option value="" disabled>Select a Mailbox ID</option>
          {mailboxes.map((mailbox)=> (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id} ({mailbox.owner})
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient:</label>
        <input
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          placeholder="Recipient Name"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here!"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;

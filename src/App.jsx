import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import Error from "./Pages/Error/index";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      owner: formData.boxOwner,
      size: formData.boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="*" element={<Error text="Mailbox Not Found!"/>} />
      </Routes>
    </>
  );
};

export default App;

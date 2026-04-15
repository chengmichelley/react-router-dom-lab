import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import LetterForm from "./components/LetterForm/LetterForm";
import Error from "./Pages/Error/index";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: crypto.randomUUID(),
      owner: formData.boxOwner,
      size: formData.boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  }

  const [letters, setLetters] = useState([]);

  const addLetter = (formData)=> {
    const newLetter = {
      mailboxId: formData.mailboxId,
      _id: crypto.randomUUID(),
      recipient: formData.recipient,
      message: formData.message,
    };
    setLetters([...letters, newLetter]);
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
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />

        <Route path="*" element={<Error text="Mailbox Not Found!" />} />
      </Routes>
    </>
  );
};

export default App;

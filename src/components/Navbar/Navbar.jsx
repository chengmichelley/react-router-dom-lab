import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
        </li>
        <li>
          <Link to="/new-mailbox">New Mailbox</Link>
        </li>
        <li>
          <Link to="/new-letter">New Letter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

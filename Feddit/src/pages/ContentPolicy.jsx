import React from 'react';
import '../styles/Policy.css'; // Ensure the path matches your structure

function ContentPolicy() {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Content Policy</h1>
      <div className="policy-content">
        <p>Welcome to Feddit’s Content Policy! We keep things simple here:</p>
        <ul>
          <li>No hate speech of any kind — spread love instead.</li>
          <li>Respect others' opinions, even if you disagree.</li>
          <li>Absolutely no pineapple on pizza debates.</li>
        </ul>
        <p>Remember — the internet is for everyone, even your grandma.</p>
      </div>
      <div className="policy-footer">
        <p>Feddit, DQ © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContentPolicy;

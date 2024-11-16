import React from 'react';
import '../styles/Policy.css';

function UserAgreement() {
  return (
    <div className="policy-container">
      <h1 className="policy-title">User Agreement</h1>
      <div className="policy-content">
        <p>By using Feddit, you agree to:</p>
        <ul>
          <li>Respect others' opinions and avoid pineapple arguments.</li>
          <li>Avoid downloading illegal movies — no judgment though!</li>
          <li>Enjoy memes responsibly and share the laughs.</li>
        </ul>
        <p>Remember, the internet is for everyone, even your grandma.</p>
      </div>
      <div className="policy-footer">
        <p>Feddit, DQ © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default UserAgreement;

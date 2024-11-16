import React from 'react';
import '../styles/Policy.css';

function PrivacyPolicy() {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <div className="policy-content">
        <p>Your privacy is our priority. Here’s how we keep things private:</p>
        <ul>
          <li>We don’t share your data with pineapple enthusiasts.</li>
          <li>Cookies are only for improving your experience (and eating).</li>
        </ul>
        <p>Remember, browsing Feddit is safer than your grandma’s firewall.</p>
      </div>
      <div className="policy-footer">
        <p>Feddit, DQ © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

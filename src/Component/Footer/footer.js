import React from "react";
import "./footer.css";
function footer() {
  return (
    <div>
      <div>
          <hr style={{marginTop:"65px" }}/>
      </div>
     
      <div className="main-content">
        <div className="content-1">
          <p>Questions? Call 800-850-1262</p>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Netflix Originals</p>
        </div>
        <div className="content-2">
          <p> </p>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div className="content-3">
        <p> </p>
          <p>Account</p>
          <p>Redeem Gift Cards</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="content-4">
        <p> </p>
          <p>Media Center</p>
          <p>Buy Gift Cards</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
      </div>
     
      <div className="footer">
        <p>Copyright © NINU V.V. &nbsp; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default footer;

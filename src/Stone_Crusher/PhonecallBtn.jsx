import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './PhoneCallButton.css'; // Import CSS file for styling

function PhoneCallButton() {
  return (
    <div className="phone-call-button">
      <a href="tel:+91 9970446795 / 9665200356"> {/* Add your phone number in href */}
        <FontAwesomeIcon icon={faPhone} style={{height:"25px"}} />
      </a>
    </div>
  );
}

export default PhoneCallButton;

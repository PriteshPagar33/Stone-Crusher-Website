import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cookiesNotify.css';

const CookiesNotify = () => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        if (showAlert) {
            setShowAlert(true);
        }
    }, [showAlert]);

    const handleAcceptCookies = () => {
        setShowAlert(false); 
    };

    return (
        <Modal show={showAlert}>
            <Modal.Header>
                <Modal.Title>This Website Uses Cookies</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                By Continuing To Use This Website, You Accept The Use Of Cookies.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleAcceptCookies}>
                    Accept
                </Button>
                <Button variant="primary" as={Link} to="/cookies-policy" onClick={() => setShowAlert(false)}>
                    Cookies Policy
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CookiesNotify;
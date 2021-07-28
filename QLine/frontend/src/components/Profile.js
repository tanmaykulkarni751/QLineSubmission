import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../styles/Profile.css";

export default function Profile() {
    return (
        <div className="Profile">
            <i id="icon" className="fas fa-user-circle fa-1x"></i>
            <p id="name"> Sanchit</p>
        </div>
    )
}
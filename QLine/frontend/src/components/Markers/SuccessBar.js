import React from 'react';
import Circle from './Circle';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function SuccessBar() {
    return (
        // Check For conditional rendering here @Tanmay
        <ProgressBar variant="success" now={15} />
    )
}
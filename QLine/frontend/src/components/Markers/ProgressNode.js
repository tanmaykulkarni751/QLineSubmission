import React from 'react';
import Circle from './Circle';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function ProgressNode() {
    return (
        // Check For conditional rendering here @Tanmay
        <ProgressBar variant="dark" now={2} />
    )
}
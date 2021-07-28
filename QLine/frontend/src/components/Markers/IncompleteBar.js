import React from 'react';
import Circle from './Circle';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function IncompleteBar() {
    return (
        // Check For conditional rendering here @Tanmay
        <ProgressBar style={{backgroundColor:"#808080"}} now={15} />
    )
}
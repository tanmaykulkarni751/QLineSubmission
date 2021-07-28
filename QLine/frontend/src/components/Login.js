import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./../styles/Login.css";

export default function Login(props) {


    function validateForm() {
        return props.name.length > 0 && props.task.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        props.setLoggedIn(true);
        // Add api call
    }

    return (
        <div>
            <div className="Header">
                <div className="Title">
                    QLine
                </div>
            </div>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            value={props.name}
                            onChange={(e) => props.setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="task">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            value={props.task}
                            onChange={(e) => props.setTask(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Proceed
                    </Button>
                </Form>
            </div>
        </div>
    );
}

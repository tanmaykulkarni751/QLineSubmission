import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./../styles/Button.css";



export default function LogButton(props) {

    const [updated, setUpdated] = useState(false);

    const user = {
        name: props.name,
        task: props.task
      } 

    const handleLogProgress = () => {
        setUpdated(true);
        axios.post('https://qline-api21.herokuapp.com/update_task', user)
            // .then(res => {
            //     // do something
            // })
    };

    return (
        <div className="LogButton">
            <Button className="ButtonStyle" variant="primary" size="lg" onClick={handleLogProgress} disabled={updated}>
                Today.LogProgress()
            </Button>{' '}
        </div>
    )
}
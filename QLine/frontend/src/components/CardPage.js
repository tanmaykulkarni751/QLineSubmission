import React, { useEffect, useState } from "react";
import axios from 'axios'
import Progress from "./Markers/Progress";
import { Card } from "react-bootstrap";
import "./../styles/CardPage.css";
import LogButton from './LogButton.js'

export default function CardPage(props) {

  const name = props.name;
  const user = {
    name: props.name,
    task: props.task
  } 
  
  return (
    <Card text="dark" className={(props.isMe) ? "MyCard" : "card"}>
      <Card.Header className={(props.isMe) ? "MyCardHeader" : "cardHeader"}> {(props.isMe) ? "You" : props.name} </Card.Header>{" "}
      {/*props.name*/}
      <Card.Body>
        <div className="DayHeader">
          Mon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-thumbs-up fa-2x"></i>
        </div>
        <br />
        <Progress updated={props.updated} data={props.res[name]}/>
        <br />
        <br />
        <div className="score"> <i class="fas fa-star"></i> {(props.isMe) ? "Your Score: " : "Score: "} {props.score} </div>
        <br /> 
        <br /> 
        {(props.isMe) ? <LogButton setUpdatedAlready={props.setUpdated} name={props.name} task={props.task} /> : null }
      </Card.Body>
    </Card>
  );
}

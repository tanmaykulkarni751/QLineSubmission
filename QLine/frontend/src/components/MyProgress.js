import React, { useState, useEffect } from 'react';
import CardPage from './CardPage.js';
import axios from 'axios';

export default function MyProgress(props) {

    const [score, setScore] = useState({});
    const user = {
        name: props.name,
        task: props.task
      } 
    
      useEffect(() => {
        axios.post('https://qline-api21.herokuapp.com/get_scores', user)
        .then(res => {
            setScore(res.data);
        });
      }, [])
    
    return (
        <div>
            {Object.keys(props.res)
                .map( (key) => 
                    (key === props.name) ? <CardPage score={score[key]} task={props.task} updated={props.updated} name={key} res={props.res} isMe={true} /> :
                        null)}
            {Object.keys(props.res)
                .map( (key) => 
                    (key !== props.name) ? <CardPage score={score[key]} task={props.task} updated={props.updated} name={key} res={props.res} isMe={false} /> :
                        null)}
        </div>
    )
}

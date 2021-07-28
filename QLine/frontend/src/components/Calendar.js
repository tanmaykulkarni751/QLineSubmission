import React, { useState } from 'react';
import MyProgress from './MyProgress';
import DisplayTask from './TaskName';
import DisplayAppName from './AppName.js'
import "./../styles/Main.css";
import LogButton from './LogButton.js'

export default function Calendar(props) {

    const [updated, setUpdated] = useState(false);
    return (
        <div className="MainPage">
            <DisplayAppName name={props.name} task={props.task} />
            <DisplayTask task={props.task} />
            <MyProgress setUpdatedAlready={setUpdated} updated={updated} task={props.task} name={props.name} res={props.res} />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
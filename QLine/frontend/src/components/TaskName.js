import React from 'react';
import "./../styles/TaskName.css";
export default function DisplayTask(props) {
    return (
        <div>
            <div className="TaskHeading">
                &lt;Task&gt; {props.task} &lt;/Task&gt;
            </div>
        </div>
    )
}
import React from 'react';
import "./../styles/AppName.css";
export default function DisplayAppName(props) {

    
    const date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const welcome = `QLine.Greetings == Welcome ${props.name}`;
    const day = `Date.GetDay() == ${weekday[date.getDay()]}`;

    return (
        <div>
            <div className="AppHeading">
                Qualcomm.QHacks.Qline ":-)" <br />
                {/* ######&nbsp;&nbsp;                   # <br />
                #&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;# <br />
                #&nbsp;&nbsp;#&nbsp;#&nbsp;&nbsp;     #<br />
                ########  #######<br /> */}
            </div>

            <div className="Slogan">
                    ~Where Quality Habits are created 
            </div>

            <div className="Welcome">
                    {welcome}
            </div>

            <div className="Day">
                    {day} <br />
            </div>
        </div>

    )
}
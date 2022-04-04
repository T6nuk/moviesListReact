import React from "react";

function Timer() {

    const [time, getTime] = React.useState(0);

    function updateTime() {
        const time = new Date().toLocaleTimeString();
        getTime(time);
    }

    setInterval(updateTime, 1000);

    

    return (<div id="timer">
        <h3>{time}</h3>
    </div>)
}

export default Timer;
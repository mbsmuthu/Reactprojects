import React,{useState, useEffect} from 'react';

function Counter() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        if(running){
            const watch = setTimeout(()=>{
                setTime(prevTime=>prevTime+1);
            }, 1000);

            return ()=>{
                clearTimeout(watch);
            }
        }
    });

        function handleToggleClick(){
            setRunning(prevState=>prevState=!prevState);
        }
        function handleStopClick(){
            setTime(0);
            setRunning(false);
        }

  return (
    
    <>
        <h2>{time}</h2>
        <button onClick={handleToggleClick}>Start / Pause</button>
        <button onClick={handleStopClick}>Stop</button>
    </>
  )
}

export default Counter
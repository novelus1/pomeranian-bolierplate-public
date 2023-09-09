import React, { useState, useEffect } from 'react';

function MemoTimer() {
    const [seconds, setSeconds] = useState(0); // Initialize seconds to 0
    const [minutes, setMinutes] = useState(0); // Initialize minutes to 0

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 59) {
                setSeconds(0);
                setMinutes(minutes + 1);
            } else {
                setSeconds(seconds + 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [seconds, minutes]);

    return (
        <div>
            <h1>Countup Timer</h1>
            <p>
                Time elapsed: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
        </div>
    );
}

export default MemoTimer;
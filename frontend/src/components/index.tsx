import React, {useEffect, useState, JSX} from "react";

export const Clock: React.FC<ClockProps> = ({clock}): JSX.Element => {
    const [currentClock, setCurrentClock] = useState<IClock>(() => {
        const savedClock = localStorage.getItem('clock');
        return savedClock ? JSON.parse(savedClock) : clock;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const newClock: IClock = {
                hour: date.getHours() % 12 || 12,
                minute: date.getMinutes(),
                second: date.getSeconds(),
                period: date.getHours() < 12 ? 'am' : 'pm',
                day: date.getDate(),
                month: date.toLocaleDateString('en', { month: 'long' }).toLowerCase(),
                year: date.getFullYear()
            }
            setCurrentClock(newClock);
            localStorage.setItem('clock', JSON.stringify(newClock));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>{`let clock = {`}</div>
            <div>
                <p>{`hour: ${currentClock.hour}`}</p>
                <p>{`minute: ${currentClock.minute}`}</p>
                <p>{`second: ${currentClock.second}`}</p>
                <p>{`period: "${currentClock.period}"`}</p>
                <p>{`day: "${currentClock.day}"`}</p>
                <p>{`month: "${currentClock.month}"`}</p>
                <p>{`year: ${currentClock.year}`}</p>
            </div>
            <div>{`}`}</div>
        </div>
    );
};

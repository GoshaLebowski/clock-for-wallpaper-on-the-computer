import React, {useEffect, useState, JSX} from "react";

export const Clock: React.FC<ClockProps> = ({clock}): JSX.Element => {
    const [currentClockLt, setCurrentClockLt] = useState<IClock>(() => {
        const savedClockLt = localStorage.getItem('clockLt');
        return savedClockLt ? JSON.parse(savedClockLt) : clock;
    });

    useEffect(() => {
        const intervalLt = setInterval(() => {
            const dateLt = new Date();
            const newClockLt: IClock = {
                hour: dateLt.getHours() % 12 || 12,
                minute: dateLt.getMinutes(),
                second: dateLt.getSeconds(),
                period: dateLt.getHours() < 12 ? 'am' : 'pm',
                day: dateLt.getDate(),
                month: dateLt.toLocaleDateString('en', {month: 'long'}).toLowerCase(),
                year: dateLt.getFullYear()
            }
            setCurrentClockLt(newClockLt);
            localStorage.setItem('clockLt', JSON.stringify(newClockLt));
        }, 1000);

        return () => {
            clearInterval(intervalLt);
        };
    }, []);

    return (
        <div className={'clock'}>
            <div>
                <div>{`let clock: localTime = {`}</div>
                <div>
                    <p>{`hour: ${currentClockLt.hour}`}</p>
                    <p>{`minute: ${currentClockLt.minute}`}</p>
                    <p>{`second: ${currentClockLt.second}`}</p>
                    <p>{`period: "${currentClockLt.period}"`}</p>
                    <p>{`day: "${currentClockLt.day}"`}</p>
                    <p>{`month: "${currentClockLt.month}"`}</p>
                    <p>{`year: ${currentClockLt.year}`}</p>
                </div>
                <div>{`}`}</div>
            </div>
        </div>
    );
};

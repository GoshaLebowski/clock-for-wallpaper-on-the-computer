import React, {useEffect, useState, JSX} from "react";

export const Clock: React.FC<ClockProps> = ({clock}): JSX.Element => {
    const [currentClockLt, setCurrentClockLt] = useState<IClock>(() => {
        const savedClockLt = localStorage.getItem('clockLt');
        return savedClockLt ? JSON.parse(savedClockLt) : clock;
    });

    const [currentClockMt, setCurrentClockMt] = useState<IClock>(() => {
        const savedClockMt = localStorage.getItem('clockMt');
        return savedClockMt ? JSON.parse(savedClockMt) : clock;
    })

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

        const intervalMt = setInterval(() => {
            const dateMt = new Date();
            const newClockMt: IClock = {
                hour: (dateMt.getHours() % 12) - 2 || 12,
                minute: dateMt.getMinutes(),
                second: dateMt.getSeconds(),
                period: dateMt.getHours() < 12 ? 'am' : 'pm',
                day: dateMt.getDate(),
                month: dateMt.toLocaleDateString('en', {month: 'long'}).toLowerCase(),
                year: dateMt.getFullYear()
            }
            setCurrentClockMt(newClockMt);
            localStorage.setItem('clockMt', JSON.stringify(newClockMt));
        }, 1000)

        return () => {
            clearInterval(intervalLt);
            clearInterval(intervalMt);
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
            <div>
                <div>{`let clock: moscowTime = {`}</div>
                <div>
                    <p>{`hour: ${currentClockMt.hour}`}</p>
                    <p>{`minute: ${currentClockMt.minute}`}</p>
                    <p>{`second: ${currentClockMt.second}`}</p>
                    <p>{`period: "${currentClockMt.period}"`}</p>
                    <p>{`day: "${currentClockMt.day}"`}</p>
                    <p>{`month: "${currentClockMt.month}"`}</p>
                    <p>{`year: ${currentClockMt.year}`}</p>
                </div>
                <div>{`}`}</div>
            </div>
        </div>
    );
};
